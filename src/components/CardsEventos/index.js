import React from "react";
import { FlatList } from "react-native";
import { Text } from "../Text/Text";
import { Feather } from "@expo/vector-icons";

import { Container, LogoIcon } from "./styles";

export default function CardsEventos({ listaEventos, onNextPage }) {
  return (
    <FlatList
      data={listaEventos}
      keyExtractor={(listaEvento) => listaEvento.id.toString()}
      renderItem={({ item: listaEvento }) => (
        <Container
          onPress={() => {
            onNextPage(listaEvento.route);
          }}
        >
          <LogoIcon source={listaEvento.logoSrc} />
          <Text size={16} color={"#FFFFFF"}>
            {listaEvento.name}
          </Text>
          <Feather name="arrow-right-circle" size={28} color="#CDA35C" />
        </Container>
      )}
    />
  );
}
