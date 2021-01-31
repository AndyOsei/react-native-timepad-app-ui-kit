import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
