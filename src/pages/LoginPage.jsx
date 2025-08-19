import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../auth/AuthProvider";

export default function LoginPage() {
  const { handleLogin } = useAuth();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      activeUser: "",
      password: "",
    },

    validate: {
      activeUser: (value) =>
        /^[a-zA-Z].{1,}$/.test(value) ? null : "Invalid userName",
    },
    password: (value) =>
      /^[a-zA-Z].{1,}$/.test(value) ? null : "Invalid password",
  });

  return (
    <form
      style={{ display: "flex", marginTop: "0.25rem" }}
      onSubmit={form.onSubmit((values) =>
        handleLogin(values.activeUser, values.password)
      )}
    >
      <TextInput
        w={200}
        withAsterisk
        placeholder="Enter email"
        key={form.key("activeUser")}
        {...form.getInputProps("activeUser")}
      />
      <TextInput
        w={200}
        withAsterisk
        placeholder="Enter password"
        key={form.key("password")}
        {...form.getInputProps("password")}
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
