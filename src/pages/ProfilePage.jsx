import { useAuth } from "../auth/AuthProvider";

export default function ProfilePage({ tweets }) {
  const { activeUser } = useAuth();
  const myTweets = tweets?.filter((tweet) => tweet.userName === activeUser);
  return (
    <div style={{ textAlign: "center", marginTop: "0.1rem" }}>
      {activeUser} has: {myTweets.length || 0} tweet
      {myTweets.length !== 1 ? "s" : ""}
    </div>
  );
}
