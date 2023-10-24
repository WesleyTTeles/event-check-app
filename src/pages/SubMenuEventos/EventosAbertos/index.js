import React from "react";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { eventosabertos } from "../../../mock/db/eventosabertos";
import { Container, InfoTabela } from "../styles";
import { Text } from "../../../components/Text/Text";

export default function TableEventosAbertos() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const handleTablePress = (tabelaId) => {
    // Navegue para a página de detalhes de inscrições (TableDetail) com o identificador da tabela selecionada
    navigation.navigate("CheckList", {
      tabelaId,
      eventosabertos: eventosabertos[tabelaId],
    });
  };

  const tableKeys = Object.keys(eventosabertos);

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
