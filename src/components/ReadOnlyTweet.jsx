import { Card, Text } from "@mantine/core";

export default function ReadOnlyTweet({ content, username, date }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={500}>username: {username}</Text>
      <Text size="sm">content: {content}</Text>
      <p>date: {date}</p>
    </Card>
  );
}
