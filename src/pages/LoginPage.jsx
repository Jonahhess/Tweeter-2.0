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
    <form
      style={{ display: "flex", marginTop: "0.25rem" }}
      onSubmit={form.onSubmit((values) => handleLogin(values.activeUser))}
    >
      <TextInput
        w={200}
        withAsterisk
        placeholder="Enter username"
        key={form.key("activeUser")}
        {...form.getInputProps("activeUser")}
      />
      <Button
        style={{ alignSelf: "flex-start", marginLeft: "0.1rem" }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
