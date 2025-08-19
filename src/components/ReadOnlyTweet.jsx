import { Card, Text } from "@mantine/core";

export default function ReadOnlyTweet({ content, userName, date }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={500}>userName: {userName}</Text>
      <Text size="sm">content: {content}</Text>
      <p>date: {date}</p>
    </Card>
  );
}
