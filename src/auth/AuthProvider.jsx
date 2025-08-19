import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../data/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ onAuthReady, children }) {
  const [activeUser, setActiveUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      // checking if there is an open session
      if (data && data.session && data.session.user) {
        setActiveUser(data.session.user);
      }
      onAuthReady();
    };
    fetchSession();
  }, []);

  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      throw error;
    } else {
      setActiveUser(data.user);
      navigate("/");
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      throw error;
    }
    setActiveUser(null);
    navigate("/login");
  };

  return (
    <AuthContext value={{ activeUser, handleLogin, handleLogout }}>
      {children}
    </AuthContext>
  );
}

export const useAuth = () => useContext(AuthContext);
