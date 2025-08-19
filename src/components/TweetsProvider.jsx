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

  useEffect(() => {
    const refresh = setInterval(async () => {
      console.log("refreshing page");
      const data = await getTweets();
      setTweets(data);
    }, 60000);

    return () => {
      clearInterval(refresh);
    };
  }, []);

  async function handlePost(tweet) {
    const post = await postTweet(tweet);
    if (post) {
      setTweets([tweet, ...tweets]);
    }
  }

  return (
    <TweetsContext value={{ tweets, handlePost }}>{children}</TweetsContext>
  );
}

export const useTweets = () => useContext(TweetsContext);
