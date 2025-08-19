import { createContext, useContext, useEffect, useState } from "react";
import { getTweets, postTweet } from "../data/serverAPI";
import { useAuth } from "../auth/AuthProvider";

const TweetsContext = createContext(null);

export function TweetsProvider({ children }) {
  const { activeUser } = useAuth();
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    if (!activeUser) {
      setTweets(null);
      return;
    }
    async function getData() {
      const data = await getTweets();
      setTweets(data);
    }
    getData();
  }, [activeUser]);

  useEffect(() => {
    if (!activeUser) return; // Only refresh if logged in

    const refresh = setInterval(async () => {
      const data = await getTweets();
      setTweets(data);
    }, 60000);

    return () => {
      clearInterval(refresh);
    };
  }, [activeUser]); // Re-run when activeUser changes

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
