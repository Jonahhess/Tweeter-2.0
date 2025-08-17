import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../auth/AuthProvider";

export default function LoginPage() {
  const { handleLogin } = useAuth();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      activeUser: "",
    },

    validate: {
      activeUser: (value) =>
        /^[a-zA-Z].{1,}$/.test(value) ? null : "Invalid username",
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => handleLogin(values.activeUser))}>
      <TextInput
        withAsterisk
        label="Username"
        placeholder="john"
        key={form.key("activeUser")}
        {...form.getInputProps("activeUser")}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
