import React from "react";
import { FlatList } from "react-native";
import { Text } from "../Text/Text";
import { Feather } from "@expo/vector-icons";

import { Container, LogoIcon } from "./styles";

export default function CardsEventos({ listNames, onNextPage }) {
  return (
    <FlatList
      data={listNames}
      keyExtractor={(listName) => listName.id.toString()}
      renderItem={({ item: listName }) => (
        <Container
          onPress={() => {
            onNextPage(listName.route);
          }}
        >
          <LogoIcon source={listName.logoSrc} />
          <Text size={16} color={"#FFFFFF"}>
            {listName.name}
          </Text>
          <Feather name="arrow-right-circle" size={28} color="#CDA35C" />
        </Container>
      )}
    />
  );
}
