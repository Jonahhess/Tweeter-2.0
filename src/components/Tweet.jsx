import { Card, Button, Text } from "@mantine/core";

export default function Tweet({ title, newTweet, setNewTweet, addTweet }) {
  return (
    <Card
      id="card"
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
      <Text>Tweet Length: {newTweet.length}</Text>
      <Text>Remaining: {140 - newTweet.length}</Text>
      {newTweet.length <= 140 && <Button onClick={addTweet}>Submit</Button>}
      {newTweet.length > 140 && <Button disabled={true}>Submit</Button>}
    </Card>
  );
}
