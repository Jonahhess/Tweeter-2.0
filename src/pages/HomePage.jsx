import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      Hello world
      <button onClick={() => navigate("/login")}>Login</button>
    </>
  );
}
