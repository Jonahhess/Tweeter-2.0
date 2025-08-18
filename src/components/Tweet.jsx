import { Card, Button, Text } from "@mantine/core";

export default function Tweet({ title, newTweet, setNewTweet, addTweet }) {
  return (
    <Card
      className="card"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ marginTop: "0.1rem" }}
    >
      <h1>{title}</h1>
      <textarea
        type="text"
        placeholder="tweet"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
      />
      <Text>Remaining: {140 - newTweet.length}</Text>
      <Button onClick={addTweet} disabled={newTweet.length > 140}>
        Submit
      </Button>
    </Card>
  );
}
