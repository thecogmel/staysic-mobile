import React from "react";
import { Box, Button, Stack } from "native-base";
import { ContainerCenter } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { navigationStackProps } from "../../routes/app.routes";
import { Linking } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Home: React.FC = () => {
  const navigation = useNavigation<navigationStackProps>();
  const openURL = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  return (
    <ContainerCenter>
      <Stack space={4} direction="column">
        <Stack space={3} direction="row">
          <Box w={170}>
            <Button onPress={() => navigation.navigate("Schedule")} size="lg">
              Agenda
            </Button>
          </Box>
          <Box w={170}>
            <Button onPress={() => navigation.navigate("Bio")} size="lg">
              Bio
            </Button>
          </Box>
        </Stack>
        <Stack space={3} direction="row">
          <Box>
            <Button
              onPress={() => navigation.navigate("Members")}
              w={170}
              size="lg"
            >
              Integrantes
            </Button>
          </Box>
          <Box>
            <Button
              onPress={() => navigation.navigate("Photos")}
              w={170}
              size="lg"
            >
              Fotos
            </Button>
          </Box>
        </Stack>
        <Stack mt={8} space={8} justifyContent="center" direction="row">
          <TouchableWithoutFeedback
            onPress={() => openURL("https://www.facebook.com/bandastaysic")}
          >
            <Entypo name="facebook-with-circle" size={60} color="red" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => openURL("https://www.instagram.com/staysic_/")}
          >
            <Entypo name="mail-with-circle" size={60} color="red" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => openURL("https://www.instagram.com/staysic_/")}
          >
            <Entypo name="instagram-with-circle" size={60} color="red" />
          </TouchableWithoutFeedback>
        </Stack>
      </Stack>
    </ContainerCenter>
  );
};

export default Home;
