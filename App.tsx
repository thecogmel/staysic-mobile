import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import AppLoading from "expo-app-loading";
import {
  extendTheme,
  NativeBaseProvider,
  INativebaseConfig,
} from "native-base";
import Theme from "./src/global/theme";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const theme = extendTheme({
    colors: Theme.colors,
    fonts: Theme.fonts,
    components: Theme.components,
  });
  let [fontsLoaded] = useFonts({
    Sickness: require("./src/assets/fonts/Sickness.ttf"),
    RobotoMono_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const config: INativebaseConfig = {
    strictMode: "warn",
  };
  return (
    <NativeBaseProvider config={config} theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="inverted" />
          <AppRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
