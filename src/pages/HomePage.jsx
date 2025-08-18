import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import Tweet from "../components/Tweet";
import ReadOnlyTweet from "../components/ReadOnlyTweet";

export default function HomePage({ tweets, setTweets }) {
  const { activeUser } = useAuth();
  const [newTweet, setNewTweet] = useState("");

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  function addTweet() {
    if (newTweet && typeof newTweet === "string") {
      setTweets([
        {
          content: newTweet,
          username: activeUser,
          date: new Date(Date.now()).toISOString(),
        },
        ...tweets,
      ]);
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
      <div id="tweets" className="card" style={{ textAlign: "center" }}>
        {tweets?.map((tweet) => (
          <ReadOnlyTweet
            key={tweet.date}
            content={tweet.content}
            username={tweet.username}
            date={tweet.date}
          />
        ))}
      </div>
    </>
  );
}
