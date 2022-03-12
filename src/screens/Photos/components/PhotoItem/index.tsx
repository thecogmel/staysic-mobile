import React from "react";
import { Center, Divider, Text } from "native-base";
import { ImageSourcePropType, Image } from "react-native";

import { Container, ImageElement } from "./styles";
interface Props {
  imageURI: ImageSourcePropType;
  title: string;
}
const PhotoItem: React.FC<Props> = ({ imageURI, title }) => {
  return (
    <Container>
      <ImageElement
        source={imageURI}
        width={100}
        height={100}
        resizeMode="cover"
      />
      <Text variant="textBody" fontSize={18} fontFamily="Title">
        {title}
      </Text>
    </Container>
  );
};

export default PhotoItem;
