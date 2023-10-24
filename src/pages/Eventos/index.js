import React from "react";

import Header from "../../components/Header";
import CardsEventos from "../../components/CardsEventos";

import { listaEventos } from "../../mock/ListaEventos/index.js";
import { Text } from "../../components/Text/Text";
import { Container } from "../Home/styles";

import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Eventos() {
  const navigation = useNavigation();

  const hanleNextPage = (route, evento) => {
    navigation.navigate(route, { evento });
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
        <CardsEventos onNextPage={hanleNextPage} listaEventos={listaEventos} />
      </View>
    </Container>
  );
}
