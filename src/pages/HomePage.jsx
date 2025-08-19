import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import Tweet from "../components/Tweet";
import ReadOnlyTweet from "../components/ReadOnlyTweet";

export default function HomePage({ tweets, handlePost }) {
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
        const post = await handlePost(tweet);
        console.log(post);
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
        {tweets?.map((tweet) => (
          <div key={tweet.date} style={{ marginBottom: "1rem" }}>
            <ReadOnlyTweet
              content={tweet.content}
              username={tweet.username}
              date={tweet.date}
            />
          </div>
        ))}
      </div>
    </>
  );
}
