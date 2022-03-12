import React from "react";
import { ImageSourcePropType, View } from "react-native";
import { Image } from "native-base";

// import { Container } from './styles';
interface Props {
  imageURI: ImageSourcePropType | undefined;
}

const PhotoItem: React.FC<Props> = ({ imageURI }) => {
  return (
    <Image
      source={imageURI}
      resizeMode="center"
      alt="Statysic Image Bio"
      size="2xl"
    />
  );
};

export default PhotoItem;
