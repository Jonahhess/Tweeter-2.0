import { Card, Button, Group } from "@mantine/core";

export default function Tweet({ title, newTweet, setNewTweet }) {
  return (
    <Card id="card" shadow="sm" padding="lg" radius="md" withBorder>
      <h1>{title}</h1>
      <Group justify="space-between" mt="md" mb="xs">
        <input
          type="text"
          placeholder="tweet"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
      </Group>
      <Button onClick={() => addTweet(content)}>Submit</Button>
    </Card>
  );
}
