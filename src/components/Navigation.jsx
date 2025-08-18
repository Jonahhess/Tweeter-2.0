import { Link } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const Navigation = () => {
  const { activeUser, handleLogout } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
        minHeight: "60px",
        padding: "0 1rem",
        boxSizing: "border-box",
        backgroundColor: "lightgrey",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        {activeUser && (
          <>
            <p>Welcome {activeUser}</p>
            <button onClick={handleLogout}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};
export default Navigation;
