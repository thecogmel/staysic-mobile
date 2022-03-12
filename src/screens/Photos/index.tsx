import React from "react";
import { View } from "react-native";
import { FlatList, Image } from "native-base";

import { Container } from "./styles";

import Photo1 from "../../assets/images/photo1.jpg";
import Photo2 from "../../assets/images/photo2.jpg";
import Photo3 from "../../assets/images/photo3.jpg";
import Photo4 from "../../assets/images/photo4.jpg";
import PhotoItem from "./components/PhotoItem";

const Photos: React.FC = () => {
  const data = [Photo1, Photo2, Photo3, Photo4];
  return (
    <FlatList
      bg="black"
      data={data}
      keyExtractor={(item) => item.toString()}
      renderItem={(item) => <PhotoItem imageURI={item.item} />}
    />
  );
};

export default Photos;
