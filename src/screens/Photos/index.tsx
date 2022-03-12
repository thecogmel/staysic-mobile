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
  const data = [
    {
      image: require("../../assets/images/photo1.jpg"),
      title: "#1 - whiskritorio - 21/05",
    },
    {
      image: require("../../assets/images/photo2.jpg"),
      title: "#2 - whiskritorio - 21/05",
    },
    {
      image: require("../../assets/images/photo3.jpg"),
      title: "#3 - whiskritorio - 21/05",
    },
    {
      image: require("../../assets/images/photo4.jpg"),
      title: "#4 - whiskritorio - 21/05",
    },
  ];
  return (
    <FlatList
      bg="black"
      data={data}
      pt={3}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <PhotoItem imageURI={item.image} title={item.title} />
      )}
    />
  );
};

export default Photos;
