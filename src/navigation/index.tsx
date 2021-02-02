import * as React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../components";

import HomeStack from "./home.navigator";

const { height } = Dimensions.get("window");
const TAB_BAR_HEIGHT = height / 10;

const Tab = createBottomTabNavigator();

function AddTaskScreen() {
  return null;
}

function ReportScreen() {
  return null;
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          height: TAB_BAR_HEIGHT,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Report") {
            iconName = focused ? "pie-chart-filled" : "pie-chart";
          } else if (route.name === "AddTask") {
            if (focused) {
              return (
                <Icon
                  name="add"
                  showBackground
                  backgroundColor="iconBackground"
                />
              );
            } else {
              return <Icon name="add" iconStyle={{ opacity: 0.5 }} />;
            }
          }

          return (
            <Icon name={iconName} iconStyle={{ opacity: focused ? 1 : 0.5 }} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="AddTask" component={AddTaskScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
    </Tab.Navigator>
  );
}
