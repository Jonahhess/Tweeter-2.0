import { Link, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const Navigation = () => {
  const navigate = useNavigate();
  const { activeUser, handleLogout } = useAuth();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {activeUser && (
        <>
          <p>Welcome {activeUser}</p>
          <button onClick={handleLogout}>Log Out</button>
        </>
      )}
    </div>
  );
};
export default Navigation;
