import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Container, Content } from "./styles";

import { Text } from "../../components/Text/Text";
import Header from "../../components/Header";

export default function Home() {
  return (
    <Container>
      <Header>
        <View>
          <Text weight={600} color={"#CDA35C"}>
            Olá, Usuário
          </Text>
          <Text>Bem Vindo!</Text>
        </View>
        <FontAwesome name="user-circle-o" size={32} color="#CDA35C" />
      </Header>
      <Content>
        <Text weight={600} color={"#CDA35C"}>
          Gerencie e confirme as inscrições de forma fácil
        </Text>
      </Content>
    </Container>
  );
}
