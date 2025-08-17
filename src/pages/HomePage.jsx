import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

export default function HomePage() {
  const { activeUser, handleLogout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!activeUser && <button onClick={() => navigate("/login")}>Login</button>}
      {activeUser && <button onClick={handleLogout}>Log Out</button>}
    </>
  );
}
