import * as React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Box, Icon, Task, Text } from "../components";
import { Theme, makeStyles } from "../components/Theme";
import { tasks } from "../data";
import { HomeStackParams, MainTabsParams } from "../types";

const useStyle = makeStyles((theme: Theme) => ({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground,
  },
  taskButton: {
    marginTop: theme.spacing.m,
  },
}));

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParams, "Home">,
  StackNavigationProp<HomeStackParams>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const styles = useStyle();

  const openTimer = () => {
    navigation.navigate("Timer", { task: {} });
  };

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
        <TouchableOpacity onPress={openTimer}>
          <Task
            title={tasks[0].title}
            timer={tasks[0].timer}
            categories={tasks[0].categories}
            selected
          />
        </TouchableOpacity>
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
            <TouchableOpacity style={styles.taskButton} onPress={openTimer}>
              <Task
                key={index}
                title={task.title}
                timer={task.timer}
                categories={task.categories}
                selected={task.selected}
              />
            </TouchableOpacity>
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
