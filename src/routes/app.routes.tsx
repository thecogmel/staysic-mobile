import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Text } from "native-base";
import theme from "../global/theme";
import Bio from "../screens/Bio";
import Photos from "../screens/Photos";
import Schedule from "../screens/Schedule";
import Members from "../screens/Members";

export type RootStackParamList = {
  Home: undefined;
  Bio: undefined;
  Photos: undefined;
  Schedule: undefined;
  Members: undefined;
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
      <Stack.Screen
        options={{ title: "Agenda" }}
        name="Schedule"
        component={Schedule}
      />
      <Stack.Screen
        options={{ title: "Integrantes" }}
        name="Members"
        component={Members}
      />
    </Stack.Navigator>
  );
}
