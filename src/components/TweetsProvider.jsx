import { createContext, useContext, useEffect, useState } from "react";
import { getTweets, postTweet } from "../data/serverAPI";

const TweetsContext = createContext(null);

export function TweetsProvider({ children }) {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getTweets();
      setTweets(data);
    }
    getData();
  }, []);

  async function handlePost(tweet) {
    const post = await postTweet(tweet);
    setTweets([tweet, ...tweets]);
    return post;
  }

  return (
    <TweetsContext value={{ tweets, handlePost }}>{children}</TweetsContext>
  );
}

export const useTweets = () => useContext(TweetsContext);
