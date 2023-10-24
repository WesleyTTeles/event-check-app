import React from "react";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { cafeegestao } from "../../../mock/db/cafeegestao";
import { Container, InfoTabela } from "../styles";
import { Text } from "../../../components/Text/Text";

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
      <FlatList
        data={tableKeys}
        keyExtractor={(tabelaId) => tabelaId}
        renderItem={({ item: tabelaId }) => (
          <InfoTabela onPress={() => handleTablePress(tabelaId)}>
            <Text color={"#FFFFFF"}>{tabelaId}</Text>
            <Feather name="arrow-right-circle" size={28} color="#CDA35C" />
          </InfoTabela>
        )}
      />
    </Container>
  );
}
