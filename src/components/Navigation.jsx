import { Link } from "react-router";
const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <h1>My App</h1>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};
export default Navigation;
