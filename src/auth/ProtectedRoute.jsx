import { Navigate } from "react-router";
import { useAuth } from "./AuthProvider";

function ProtectedRoute({ children }) {
  const { activeUser } = useAuth();

  if (!activeUser) return <Navigate to="/login" replace />;

  return <>{children}</>;
}

export default ProtectedRoute;
