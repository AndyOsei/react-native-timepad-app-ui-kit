import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Box, Icon, Task, Text } from "../components";
import { Theme, makeStyles } from "../components/Theme";

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
          <Text variant="h2" color="textForegroundDark">
            Task
          </Text>
          <Icon name="more" />
        </Box>
        <Task />
        <Box marginTop="xl">
          <Box flexDirection="row" justifyContent="space-between">
            <Text variant="h2" color="textForegroundDark">
              Today
            </Text>
            <Text variant="body" color="textForegroundDark">
              See All
            </Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
