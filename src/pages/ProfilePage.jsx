import { useAuth } from "../auth/AuthProvider";
import { useTweets } from "../components/TweetsProvider";

export default function ProfilePage() {
  const { activeUser } = useAuth();
  const { tweets } = useTweets();
  const myTweets = tweets?.filter((tweet) => tweet.userName === activeUser);
  return (
    <div style={{ textAlign: "center", marginTop: "0.1rem" }}>
      {activeUser} has: {myTweets?.length || 0} tweet
      {myTweets?.length !== 1 ? "s" : ""}
    </div>
  );
}
