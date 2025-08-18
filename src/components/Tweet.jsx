import { Card, Button } from "@mantine/core";

export default function Tweet({ title, newTweet, setNewTweet, addTweet }) {
  return (
    <Card id="card" shadow="sm" padding="lg" radius="md" withBorder>
      <h1>{title}</h1>
      <textarea
        type="text"
        placeholder="tweet"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
      />
      <Button onClick={addTweet}>Submit</Button>
    </Card>
  );
}
