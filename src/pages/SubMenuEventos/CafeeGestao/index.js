import React from "react";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { cafeegestao } from "../../../mock/db/cafeegestao";
import { Text } from "../../../components/Text/Text";
import { Container, InfoTabela } from "../styles";

export default function TableCafeeGestao() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const handleTablePress = (tabelaId) => {
    // Navegue para a página de detalhes de inscrições (TableDetail) com o identificador da tabela selecionada
    navigation.navigate("CheckList", {
      tabelaId,
      cafeegestao: cafeegestao[tabelaId],
    });
  };

  const tableKeys = Object.keys(cafeegestao);

  return (
    <Container>
      <Text size={18} color={'#CDA35C'}>Tabela de inscrições</Text>
      <FlatList
        data={tableKeys}
        keyExtractor={(tabelaId) => tabelaId}
        renderItem={({ item: tabelaId }) => (
          <InfoTabela onPress={() => handleTablePress(tabelaId)}>
            <Text color={"#FFFFFF"}>{tabelaId}</Text>
            <Ionicons name="ios-arrow-forward" size={28} color="#CDA35C" />
          </InfoTabela>
        )}
      />
    </Container>
  );
}
