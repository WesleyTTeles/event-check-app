import React from "react";

import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text } from "../../../components/Text/Text";
import { Container, InfoTabela } from "../styles";
import { tabelas } from "../../../mock/Tabelas/projetogeminar";

export default function ProjetoGerminar() {
  return (
    <Container>
      <FlatList
        data={tabelas}
        keyExtractor={(tabela) => tabela.id}
        renderItem={({ item: tabela }) => (
          <InfoTabela>
            <Text color={"#FFFFFF"}>{tabela.name}</Text>
            <Feather name="arrow-right-circle" size={28} color="#CDA35C" />
          </InfoTabela>
        )}
      />
    </Container>
  );
}
