import React from "react";

import Header from "../../components/Header";
import CardsEventos from "../../components/CardsEventos";

import { listNames } from "../../mock/ListaEventos/listNames";
import { Text } from "../../components/Text/Text";
import { Container } from "../Home/styles";

import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Eventos({}) {
  const navigation = useNavigation();

  const hanleNextPage = (route) => {
    navigation.navigate(route);
  };

  return (
    <Container>
      <Header>
        <View style={{ width: "100%" }}>
          <Text
            style={{ textAlign: "center" }}
            size={18}
            weight={600}
            color={"#605F69"}
          >
            Eventos
          </Text>
        </View>
      </Header>
      <View style={{ paddingHorizontal: 18 }}>
        <CardsEventos onNextPage={hanleNextPage} listNames={listNames} />
      </View>
    </Container>
  );
}
