import { Link } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const Navigation = () => {
  const { activeUser, handleLogout } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        minHeight: "60px",
        padding: "0 1rem",
        boxSizing: "border-box",
        backgroundColor: "lightgrey",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>

      {activeUser && (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
          }}
        >
          <p>Welcome {activeUser}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
};
export default Navigation;
