import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Images from "./src/constants/images";
import { LoadAsset, theme } from "./src/components";
import AppNavigator from "./src/navigation";

const fonts = {
  "Montserrat-Bold": require("./assets/fonts/Rubik-Regular.otf"),
  "Montserrat-Semibold": require("./assets/fonts/Rubik-Medium.otf"),
};

const assets = [...Object.values(Images)];

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider>
        <LoadAsset {...{ fonts, assets }}>
          <AppNavigator />
        </LoadAsset>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
