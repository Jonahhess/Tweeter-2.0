const url =
  "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo";

async function getTweets() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("could not read from db");
  }
  const json = await response.json();
  if (!json) {
    throw new Error("could not rettrieve json from response");
  }
  return json;
}

async function postTweet(tweet) {
  const post = await fetch(url, {
    method: "POST",
    body: JSON.stringify(tweet),
  });
}

export { getTweets, postTweet };
