import { Text, Paper } from "@mantine/core";
import { RiAddCircleFill } from "react-icons/ri";

export function AddNew() {
  return (
    <Paper
      shadow="sm"
      p="md"
      w={200}
      h={150}
      radius="md"
      withBorder
      align="center"
    >
      <div className="borderStyle">
        <RiAddCircleFill color="blue" size={35} />
        <Text fz="sm">
          New Transaction
          <Text fz="xs">or upload .xls file</Text>
        </Text>
      </div>
    </Paper>
  );
}
