import React from "react";

import Icon from "./Icon";
import { Box, Text, Card } from "./Theme";

const Task = () => {
  return (
    <Card paddingHorizontal="m">
      <Box flexDirection="row" justifyContent="space-between" marginTop="l">
        <Text variant="h1" color="textForegroundDark">
          00:32:00
        </Text>
        <Icon name="right-arrow" />
      </Box>
      <Box flexDirection="row" alignItems="center" marginVertical="l">
        <Box marginRight="m">
          <Icon name="ellipse" />
        </Box>
        <Text variant="body" color="textForegroundDark">
          Rasion Project
        </Text>
      </Box>
    </Card>
  );
};

export default Task;
