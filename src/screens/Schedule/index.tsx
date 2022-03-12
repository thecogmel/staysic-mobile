import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "native-base";

import { Container } from "./styles";

const Schedule: React.FC = () => {
  const themes = useTheme();

  return (
    <Container>
      <Text
        mb={2}
        fontSize={24}
        fontFamily="Title"
        color={themes.colors.primary[400]}
      >
        Proximos eventos
      </Text>
      <Text fontSize={16} variant="textBody">
        Whiksritório - 26/05 - 21:00hr
      </Text>
      <Text fontSize={16} variant="textBody">
        Whiksritório - 26/05 - 21:00hr
      </Text>
      <Text fontSize={16} variant="textBody">
        Whiksritório - 26/05 - 21:00hr
      </Text>
      <Text fontSize={16} variant="textBody">
        Whiksritório - 26/05 - 21:00hr
      </Text>
      <Text fontSize={16} variant="textBody">
        Whiksritório - 26/05 - 21:00hr
      </Text>
    </Container>
  );
};

export default Schedule;
