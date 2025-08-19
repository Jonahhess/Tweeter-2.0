import { supabase } from "./supabase";

async function getTweets() {
  let { data, error } = await supabase.from("Tweets").select("*");
  return data;
}

async function postTweet(tweet) {
  const { data, error } = await supabase
    .from("Tweets")
    .insert([tweet])
    .select();
}

export { getTweets, postTweet };
