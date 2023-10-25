import React from "react";
import { FlatList, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { Text } from "../Text/Text";
import { Container } from "../../pages/Home/styles";
import { Table, TableContainer, IconAction } from "./styles";

import CardsInfoDetails from "../CardsInfoDetails";

export default function CheckList() {
  const route = useRoute();
  const { cafeegestao, eventosabertos, projetogeminar, renogrupo } =
    route.params;

  const inscricoesDaTabela =
    cafeegestao || eventosabertos || projetogeminar || renogrupo || [];

  const totalInscricoes = inscricoesDaTabela.length;

  const totalAguardando = inscricoesDaTabela.filter(
    (inscricao) => inscricao.status === "aguardando"
  ).length;

  const totalPresente = inscricoesDaTabela.filter(
    (inscricao) => inscricao.status === "presente"
  ).length;

  return (
    <Container>
      <CardsInfoDetails
        totalInscricoes={totalInscricoes}
        inscricaoAguardando={totalAguardando}
        inscricaoPresente={totalPresente}
      />
      <Text style={{ marginLeft: 22 }} size={18} color={"#CDA35C"}>
        Lista de Presença
      </Text>

      <TableContainer>
        <Table>
          <Text style={{ width: 20 }} weight="600" size={16}>
            ID
          </Text>
          <Text style={{ width: 200 }} weight="600" size={16}>
            Nome
          </Text>
          <Text style={{ width: 60 }} weight="600" size={16}>
            Status
          </Text>
          <Text weight="600" size={16}>
            Ação
          </Text>
        </Table>
        <FlatList
          data={inscricoesDaTabela}
          keyExtractor={(inscricao) => inscricao.id.toString()}
          renderItem={({ item: inscricao }) => (
            <Table>
              <Text style={{ width: 20 }}>{inscricao.id}</Text>
              <View>
                <Text weight="600" size={16} style={{ width: 200 }}>
                  {inscricao.name}
                </Text>
                <Text style={{ width: 200 }}>{inscricao.email}</Text>
              </View>
              <Text style={{ width: 90, textAlign: "center" }}>
                {inscricao.status}
              </Text>
              <IconAction>
                <Feather name="check-circle" size={22} color="#43A53B" />
              </IconAction>
            </Table>
          )}
        />
      </TableContainer>
    </Container>
  );
}
