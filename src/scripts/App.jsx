import { Flex } from "@mantine/core";
// Components
import { Dashboard } from "./components/Dashboard";
import { LoginPage } from "./components/LoginPage";

export function App() {

  let text = "start Managing your finance faster and better"
  return (
    <>
      <Flex        
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Dashboard text={text} ></Dashboard>
        <LoginPage text={text} ></LoginPage>
      </Flex>
    </>
  );
}

App.displayName = "RootApp";
