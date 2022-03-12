import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Text } from "native-base";
import theme from "../global/theme";
import Bio from "../screens/Bio";
import Photos from "../screens/Photos";
import BackButton from "../assets/images/backButton.svg";

export type RootStackParamList = {
  Home: undefined;
  Bio: undefined;
  Photos: undefined;
};

export type navigationStackProps =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: `${theme.colors.primary[500]}`,
        headerTitleAlign: "center",
        headerTitle: "Staysic",
        headerTitleStyle: {
          fontFamily: theme.fonts.Title,
          fontSize: 32,
        },
        headerStyle: { backgroundColor: "black" },
        headerBackImageSource: require("../assets/images/backButton(1).png"),
        /* headerLeft: () => <BackButton />, */
      }}
    >
      <Stack.Screen name="Staysic" component={Home} />
      <Stack.Screen
        options={{ title: "Biografia" }}
        name="Bio"
        component={Bio}
      />
      <Stack.Screen
        options={{ title: "Fotos" }}
        name="Photos"
        component={Photos}
      />
    </Stack.Navigator>
  );
}
