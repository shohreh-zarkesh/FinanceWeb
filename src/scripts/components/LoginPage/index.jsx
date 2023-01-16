import { TextInput, PasswordInput, Button, Text, Title } from "@mantine/core";

//Icon
import { TbMail } from "react-icons/tb";
import { MdLockOutline } from "react-icons/md";

//Hooks
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

//Components
import { LoginWithAccount } from "./components/LoginWithAccount";
import { Forget } from "./components/Forget";

export function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [visible, { toggle }] = useDisclosure(false);

  function handleOnInputChange({ target: { value: email } }) {
    setEmail(email);
  }

  function handleOnClick(e) {
    e.preventDefault();

    props.click(email);
  }

  return (
    <div className="margina">
      <form>
        <Title order={2}>Welcome Back!</Title>
        <Text c="gray">start Managing your finance faster and better</Text>
        <TextInput
          icon={<TbMail />}
          mt={30}
          placeholder="you@example.com"
          variant="filled"
          radius="md"
          value={email}
          onChange={handleOnInputChange}
        />
        <PasswordInput
          icon={<MdLockOutline />}
          mt="md"
          placeholder="AtLeast 8 charachters"
          variant="filled"
          radius="md"
          visible={visible}
          onVisibilityChange={toggle}
        />
        <Text mt={5} mb={5} ta="right">
          <a href="">Forgot password?</a>
        </Text>

        <Button fullWidth type="submit" radius="md" onClick={handleOnClick}>
          Login
        </Button>

        <LoginWithAccount></LoginWithAccount>
        <Forget></Forget>
      </form>
    </div>
  );
}
