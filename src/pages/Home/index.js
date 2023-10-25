import React from "react";
import { View } from "react-native";

import { Container, Content, ImageLogo } from "./styles";
import { Text } from "../../components/Text/Text";

import logo from "../../assets/images/logo.png";

export default function Home() {
  return (
    <Container>
      <View style={{ alignItems: "center" }}>
        <ImageLogo source={logo} />
      </View>
      <Content>
        <Text size={22} weight={600} color={"#CDA35C"}>
          Seja Bem Vindo!
        </Text>
        <Text style={{ textAlign: "center" }}>
          Gerencie e confirme as inscrições de cada evento de forma fácil
        </Text>
      </Content>
    </Container>
  );
}
