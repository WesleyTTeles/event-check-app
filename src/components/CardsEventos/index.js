import React from "react";
import { FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { Text } from "../Text/Text";
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
          <Ionicons name="ios-arrow-forward" size={28} color="#CDA35C" />
        </Container>
      )}
    />
  );
}
