import { Link, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const Navigation = () => {
  const navigate = useNavigate();
  const { activeUser, handleLogout } = useAuth();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {!activeUser && <button onClick={() => navigate("/login")}>Login</button>}
      {activeUser && <button onClick={handleLogout}>Log Out</button>}
    </div>
  );
};
export default Navigation;
