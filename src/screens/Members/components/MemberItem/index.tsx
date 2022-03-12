import React from "react";
import { Center, Divider, Stack, Text } from "native-base";
import { ImageSourcePropType, Image } from "react-native";

import { Container, ImageElement } from "./styles";
interface Props {
  imageURI: ImageSourcePropType;
  name: string;
  number: string;
  description: string;
}
const MemberItem: React.FC<Props> = ({
  imageURI,
  name,
  number,
  description,
}) => {
  return (
    <Stack direction={"column"} mb={8} px={4}>
      <Stack alignItems={"center"} mb={3} space={4} direction={"row"}>
        <ImageElement
          source={imageURI}
          width={100}
          height={100}
          resizeMode="cover"
        />
        <Text variant="textBody" fontSize={18} fontFamily="Title">
          #{number} - {name}
        </Text>
      </Stack>
      <Stack direction={"row"}>
        <Text variant="textBody" fontSize={14}>
          {description}
        </Text>
      </Stack>
    </Stack>
  );
};

export default MemberItem;
