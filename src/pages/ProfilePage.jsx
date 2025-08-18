import { useAuth } from "../auth/AuthProvider";

export default function ProfilePage({ tweets }) {
  const { activeUser } = useAuth();
  const myTweets = tweets?.filter((tweet) => tweet.username === activeUser);
  return (
    <>
      {activeUser} has: {myTweets.length || 0} tweet
      {myTweets.length !== 1 ? "s" : ""}
    </>
  );
}
