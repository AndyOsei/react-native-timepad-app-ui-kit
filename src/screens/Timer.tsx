import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { Box, Text } from "../components";
import { HomeStackParams } from "../types";

const Timer = ({ route }: StackScreenProps<HomeStackParams, "Timer">) => {
  const { task } = route.params;
  const { title } = task;

  return (
    <Box flex={1} backgroundColor="mainBackgroundAlt">
      <Box
        width={40}
        height={4}
        marginTop="m"
        backgroundColor="indicatorBackground"
        alignSelf="center"
        style={{ borderRadius: 8 }}
      />
      <Box flex={1} justifyContent="space-around">
        <Box>
          <Box>
            <Text>{title}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Timer;
