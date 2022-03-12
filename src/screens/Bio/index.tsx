import React from "react";
import {
  Box,
  Center,
  Container,
  Image,
  ScrollView,
  Text,
  useTheme,
} from "native-base";

const Bio: React.FC = () => {
  const themes = useTheme();
  return (
    <ScrollView bg={"black"}>
      <Center>
        <Image
          source={require("../../assets/images/bio.jpg")}
          resizeMode="center"
          alt="Statysic Image Bio"
          size="2xl"
        />
      </Center>
      <Box px={3}>
        <Text
          mb={2}
          fontSize={24}
          fontFamily="Title"
          color={themes.colors.primary[400]}
        >
          Biografia
        </Text>
        <Text variant="textBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat
          tristique arcu, eget dictum libero consectetur eget. Pellentesque
          pretium massa eget fringilla consectetur. Cras vel odio egestas,
          rutrum tortor sit amet, lobortis lorem. Etiam ac ligula bibendum
          mauris fermentum consequat. Sed rutrum tortor eget metus maximus, vel
          mollis odio pretium. Vivamus sit amet purus accumsan, pretium arcu a,
          pharetra ligula. In mattis auctor quam, eget tempus lorem euismod sit
          amet. Proin sapien dolor, gravida ultrices velit eu, efficitur
          elementum ex. Sed sed dapibus tortor. Etiam bibendum elit consectetur
          tellus pretium, sit amet vulputate odio sodales. Nam eget justo
          sapien. In semper mi odio, at ullamcorper ligula malesuada in. Integer
          vehicula vestibulum velit, vel faucibus lectus blandit eget. Vivamus
          vel enim aliquet, finibus est vitae, accumsan turpis. Praesent sit
          amet lobortis diam. Suspendisse volutpat semper felis. Praesent
          fringilla augue erat, a lacinia lacus semper sit amet. Proin lacinia
          iaculis ullamcorper. Curabitur sem sem, elementum quis blandit at,
          blandit sit amet enim. Suspendisse sit amet tempus arcu.
        </Text>
      </Box>
    </ScrollView>
  );
};

export default Bio;
