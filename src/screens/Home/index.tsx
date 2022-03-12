import React from "react";
import { Box, Button, Stack } from "native-base";
import { ContainerCenter } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { navigationStackProps } from "../../routes/app.routes";

const Home: React.FC = () => {
  const navigation = useNavigation<navigationStackProps>();
  return (
    <ContainerCenter>
      <Stack space={4} direction="column">
        <Stack space={3} direction="row">
          <Box w={170}>
            <Button size="lg">Agenda</Button>
          </Box>
          <Box w={170}>
            <Button onPress={() => navigation.navigate("Bio")} size="lg">
              Bio
            </Button>
          </Box>
        </Stack>
        <Stack space={3} direction="row">
          <Box>
            <Button w={170} size="lg">
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
          <Entypo name="facebook-with-circle" size={60} color="red" />
          <Entypo name="mail-with-circle" size={60} color="red" />
          <Entypo name="instagram-with-circle" size={60} color="red" />
        </Stack>
      </Stack>
    </ContainerCenter>
  );
};

export default Home;
