import { Text, Flex, Image } from "@mantine/core";

//Components
import { Cards } from "./components/Cards";
import { Slides } from "./components/Slides";

export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="margina">
      <Flex gap={30} justify="" align="left" direction="column" wrap="nowrap">
        <Flex        
          gap="xs"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <Image
            src="src/scripts/components/Dashboard/utilities/logo.JPG"
            alt="logo"
            width={10}
            height={10}
          ></Image>
          <Text>FINOTIC</Text>
        </Flex>
        <Cards></Cards>
        <Slides theme={{ primaryShade: 6 }} align="center"></Slides>
      </Flex>
      </div>
    </div>
  );
}
