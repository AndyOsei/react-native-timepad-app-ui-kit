import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../components";
import { useTheme } from "@shopify/restyle";

const Tab = createBottomTabNavigator();

function HomeStack() {
  return null;
}

function AddTaskScreen() {
  return null;
}

function ReportScreen() {
  return null;
}

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Report") {
            iconName = focused ? "pie-chart-filled" : "pie-chart";
          } else if (route.name === "AddTask") {
            if (focused) {
              return <Icon name="add" />;
            } else {
              return (
                <Icon
                  name="add"
                  containerProps={{
                    backgroundColor: "iconBackground",
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                  }}
                />
              );
            }
          }

          return <Icon name={iconName} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="AddTask" component={AddTaskScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
    </Tab.Navigator>
  );
}
