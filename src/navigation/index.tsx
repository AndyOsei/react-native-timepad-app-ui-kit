import * as React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackScreenProps,
  TransitionPresets,
} from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

import { TimerScreen } from "../screens";
import { HomeStackParams } from "../types";

import MainTabs from "./home.navigator";

const Stack = createStackNavigator<HomeStackParams>();

type Props = StackScreenProps<ParamListBase> & {
  options?: StackNavigationOptions;
};

const AppNavigator = ({ options }: Props) => {
  return (
    <Stack.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={({ route, navigation }) => ({
        ...TransitionPresets.ModalPresentationIOS,
        cardOverlayEnabled: true,
        gestureEnabled: true,
        headerStatusBarHeight:
          navigation
            .dangerouslyGetState()
            .routes.findIndex((r: any) => r.key === route.key) > 0
            ? 0
            : undefined,
      })}
      {...options}
    >
      <Stack.Screen name="Home" component={MainTabs} />
      <Stack.Screen name="Timer" component={TimerScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
