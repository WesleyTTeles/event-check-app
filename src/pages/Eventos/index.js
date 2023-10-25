import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container } from "../Home/styles";
import { Text } from "../../components/Text/Text";
import { listaEventos } from "../../mock/ListaEventos/index.js";

import CardsEventos from "../../components/CardsEventos";

export default function Eventos() {
  const navigation = useNavigation();

  const hanleNextPage = (route, evento) => {
    navigation.navigate(route, { evento });
  };

  return (
    <Container>
      <Text
        style={{ textAlign: "center" }}
        size={18}
        weight={600}
        color={"#605F69"}
      >
        Eventos
      </Text>
      <View style={{ paddingHorizontal: 18 }}>
        <CardsEventos onNextPage={hanleNextPage} listaEventos={listaEventos} />
      </View>
    </Container>
  );
}
