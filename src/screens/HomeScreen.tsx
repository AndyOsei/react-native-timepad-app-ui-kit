import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Box, Icon, Task, Text } from "../components";
import { Theme, makeStyles } from "../components/Theme";
import { tasks } from "../data";

const useStyle = makeStyles((theme: Theme) => ({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground,
  },
}));

const HomeScreen = () => {
  const styles = useStyle();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Box flex={1} backgroundColor="mainBackground" marginHorizontal="m">
        <Box
          marginTop="xl"
          marginBottom="l"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text variant="h2" color="textForeground">
            Task
          </Text>
          <Icon name="more" />
        </Box>
        <Task
          title={tasks[0].title}
          timer={tasks[0].timer}
          categories={tasks[0].categories}
          selected
        />
        <Box marginTop="xl">
          <Box flexDirection="row" justifyContent="space-between">
            <Text variant="h2" color="textForeground">
              Today
            </Text>
            <Text variant="body" color="textForeground">
              See All
            </Text>
          </Box>
          {tasks.map((task, index) => (
            <Box marginTop="m">
              <Task
                key={index}
                title={task.title}
                timer={task.timer}
                categories={task.categories}
                selected={task.selected}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
