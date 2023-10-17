import React from "react";
import { Text } from "../../../components/Text/Text";
import { Container, InfoTabela } from "../styles";
import { FlatList } from "react-native";
import { tabelas } from "../../../mock/Tabelas/cafeegestao";
import { Feather } from "@expo/vector-icons";

export default function CafeeGestao() {
  return (
    <Container>
      <FlatList
        data={tabelas}
        keyExtractor={(tabela) => tabela.id.toString()}
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
