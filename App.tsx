import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Images from "./src/constants/images";
import { LoadAsset } from "./src/components";
import { theme } from "./src/components/Theme";
import AppNavigator from "./src/navigation";

const fonts = {
  "Rubik-Regular": require("./assets/fonts/Rubik-Regular.otf"),
  "Rubik-Medium": require("./assets/fonts/Rubik-Medium.otf"),
};

const assets = [...Object.values<number>(Images)];

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
