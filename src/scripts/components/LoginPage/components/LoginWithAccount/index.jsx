import {
    Flex,
    Button,
    Divider,
  } from "@mantine/core";
  
  //Icon
  import { FcGoogle } from "react-icons/fc";
  
  import { SiFacebook } from "react-icons/si";
  
  

export function LoginWithAccount() {
  return (
    <>
      <Divider my={30} label="or" labelPosition="center" />
      <Flex
        my={0}
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Button
          fullWidth
          leftIcon={<FcGoogle />}
          variant="default"
          icon={FcGoogle}
          type="submit"
          radius="md"
        >
          Google
        </Button>
        <Button
          fullWidth
          leftIcon={<SiFacebook />}
          variant="default"
          type="submit"
          radius="md"
        >
          Facebook
        </Button>
      </Flex>
    </>
  );
}
