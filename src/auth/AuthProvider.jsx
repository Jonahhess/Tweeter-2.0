import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
// import { supabase } from "../data/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) || null
  );
  const isMounted = useRef(false);
  const navigate = useNavigate();

  // run only after notes have been loaded from first useEffect
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
    } else {
      isMounted.current = true;
    }
  }, [activeUser]);

  const handleLogin = (username) => {
    console.log(username);
    setActiveUser(username);
    navigate("/profile");
  };

  // const handleLogin = async (email, password) => {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     console.log(error);
  //     throw error;
  //   } else {
  //     setActiveUser(data.user);
  //     navigate("/movies");
  //   }
  // };

  const handleLogout = () => {
    setActiveUser(null);
    navigate("/");
  };

  // const handleLogout = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   if (error) {
  //     console.log(error);
  //     throw error;
  //   }
  //   setActiveUser(null);
  //   navigate("/");
  // };

  return (
    <AuthContext value={{ activeUser, handleLogin, handleLogout }}>
      {children}
    </AuthContext>
  );
}

export const useAuth = () => useContext(AuthContext);
