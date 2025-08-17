import { useAuth } from "../auth/AuthProvider";

export default function ProfilePage() {
  const { activeUser } = useAuth();
  return <>{activeUser}</>;
}
