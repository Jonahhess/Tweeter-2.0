import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import Tweet from "../components/Tweet";
import ReadOnlyTweet from "../components/ReadOnlyTweet";
import { useTweets } from "../components/TweetsProvider";

export default function HomePage() {
  const { tweets, handlePost } = useTweets();
  const { activeUser } = useAuth();
  const [newTweet, setNewTweet] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  async function addTweet() {
    if (newTweet && typeof newTweet === "string") {
      setIsPosting(true);
      const tweet = {
        content: newTweet,
        userName: activeUser,
        date: new Date(Date.now()).toISOString(),
      };
      setNewTweet("");
      try {
        await handlePost(tweet);
      } catch (e) {
        console.log(e);
      } finally {
        setIsPosting(false);
      }
    }
  }

  return (
    <>
      <Tweet
        title="New Tweet"
        newTweet={newTweet}
        setNewTweet={setNewTweet}
        addTweet={addTweet}
        isPosting={isPosting}
      />
      <div
        id="tweets"
        className="card"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        {tweets?.toReversed().map((tweet) => (
          <div key={tweet?.id} style={{ marginBottom: "1rem" }}>
            <ReadOnlyTweet
              content={tweet.content}
              userName={tweet.userName}
              date={tweet.date}
            />
          </div>
        ))}
      </div>
    </>
  );
}
