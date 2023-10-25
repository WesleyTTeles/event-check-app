import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { Container } from "../Home/styles";
import { Text } from "../../components/Text/Text";
import { Action, ExitArea, IconUser } from "./styles";

export default function MinhaConta() {
  return (
    <Container>
      <IconUser>
        <FontAwesome name="user-circle-o" size={52} color="#CDA35C" />
        <Text size={18}>Nome do Usuário</Text>
      </IconUser>
      <Action>
        <TouchableOpacity
          onPress={() => {
            alert("Função em Desenvolvimento");
          }}
        >
          <Text>Dados Cadastrais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Função em Desenvolvimento");
          }}
        >
          <Text>Alterar Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Função em Desenvolvimento");
          }}
        >
          <Text>Ajuda</Text>
        </TouchableOpacity>
      </Action>
      <ExitArea>
        <Text weight="600" color={"#CDA35C"}>
          Sair do App
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert("Função em Desenvolvimento");
          }}
        >
          <FontAwesome5 name="sign-out-alt" size={24} color="#CDA35C" />
        </TouchableOpacity>
      </ExitArea>
    </Container>
  );
}
