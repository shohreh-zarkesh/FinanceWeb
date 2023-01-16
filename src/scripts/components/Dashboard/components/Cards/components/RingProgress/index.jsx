import { Text, Card, RingProgress } from "@mantine/core";

export function RingProgress() {
  return (
    <Card className="child1"         
    shadow="sm" w={150} h={150} radius="md" withBorder>
      <RingProgress
        label={
          <Text color="black" weight={700} align="center" size="xl">
            34%
            <Text fz="xs" td="" align="center">
              food
            </Text>
          </Text>
        }
        sections={[
          { value: 40, color: "blue" },
          { value: 15, color: "red" },
          { value: 15, color: "green" },
          { value: 15, color: "orange" },
        ]}
      />
    </Card>
  );
}
