import React from "react";
import { FlatList } from "native-base";
import MemberItem from "./components/MemberItem";

// import { Container } from './styles';

const Members: React.FC = () => {
  const data = [
    {
      image: require("../../assets/images/7.jpg"),
      name: "André Henrique",
      number: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolores excepturi enim reprehenderit facilis saepe, necessitatibus facere, molestiae veniam rerum cum fugit laborum? Animi aliquam nemo facere repudiandae nesciunt officiis?",
    },
    {
      image: require("../../assets/images/7.jpg"),
      name: "André Henrique",
      number: "2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolores excepturi enim reprehenderit facilis saepe, necessitatibus facere, molestiae veniam rerum cum fugit laborum? Animi aliquam nemo facere repudiandae nesciunt officiis?",
    },
    {
      image: require("../../assets/images/7.jpg"),
      name: "André Henrique",
      number: "3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolores excepturi enim reprehenderit facilis saepe, necessitatibus facere, molestiae veniam rerum cum fugit laborum? Animi aliquam nemo facere repudiandae nesciunt officiis?",
    },
    {
      image: require("../../assets/images/7.jpg"),
      name: "André Henrique",
      number: "4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolores excepturi enim reprehenderit facilis saepe, necessitatibus facere, molestiae veniam rerum cum fugit laborum? Animi aliquam nemo facere repudiandae nesciunt officiis?",
    },
    {
      image: require("../../assets/images/7.jpg"),
      name: "André Henrique",
      number: "5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolores excepturi enim reprehenderit facilis saepe, necessitatibus facere, molestiae veniam rerum cum fugit laborum? Animi aliquam nemo facere repudiandae nesciunt officiis?",
    },
  ];

  return (
    <FlatList
      bg="black"
      data={data}
      pt={5}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <MemberItem
          imageURI={item.image}
          name={item.name}
          description={item.description}
          number={item.number}
        />
      )}
    />
  );
};

export default Members;
