import { Card, Button, Group } from "@mantine/core";

export default function ReadOnlyTweet({ content, username, date }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text size="md">{username}</Text>
      <Text size="sm">{content}</Text>
      <Text>{date}</Text>
    </Card>
  );
}
