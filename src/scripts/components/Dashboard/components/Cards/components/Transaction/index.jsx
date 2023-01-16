import { Card, Flex, Text } from "@mantine/core";
import { RiFolder5Fill } from "react-icons/ri";

export function Transaction() {
  return (
    <Card
      className="child2"
      sx={{ height: 100, position: "relative" }}
      shadow="sm"
      w={150}
      h={150}
      radius="md"
      withBorder
    >
      <Flex
        gap="xs"
        justify="center"
        align="left"
        direction="column"
        wrap="nowrap"
      >
        <RiFolder5Fill color="blue" size={30} />
        <Text fz="xs" mb={10}>
          Current Balance
        </Text>
        <Text fz="xl" color="Blue"><Text span c="black" fz="xs">$</Text>24,359</Text>
      </Flex>
    </Card>
  );
}
