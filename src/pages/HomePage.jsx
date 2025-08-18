import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import Tweet from "../components/Tweet";
import ReadOnlyTweet from "../components/ReadOnlyTweet";

export default function HomePage({ tweets, handlePost }) {
  const { activeUser } = useAuth();
  const [newTweet, setNewTweet] = useState("");

  async function addTweet() {
    if (newTweet && typeof newTweet === "string") {
      const tweet = {
        content: newTweet,
        userName: activeUser,
        date: new Date(Date.now()).toISOString(),
      };
      await handlePost(tweet);
      setNewTweet("");
    }
  }

  return (
    <>
      <Tweet
        title="New Tweet"
        newTweet={newTweet}
        setNewTweet={setNewTweet}
        addTweet={addTweet}
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
