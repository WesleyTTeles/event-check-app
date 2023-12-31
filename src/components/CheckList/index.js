import React, { useState, useMemo } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import Modal from "react-native-modal";
import CustomModal from "../CustomModal/CustomModal";
import { Text } from "../Text/Text";
import {
  Table,
  TableContainer,
  IconAction,
  Container,
  Tr,
  ViewName,
  ConfirmContainer,
  TextConfirm,
  ConfirmButton,
  TextConfirmButton,
  CancelButton,
  TextCancelButton,
} from "./styles";

import CardsInfoDetails from "../CardsInfoDetails";
import SearchInput from "../SearchInput";

export default function CheckList() {
  const route = useRoute();
  const { cafeegestao, eventosabertos, projetogeminar, renogrupo } =
    route.params;

  const inscricoesDaTabela =
    cafeegestao || eventosabertos || projetogeminar || renogrupo;

  const [list, setList] = useState(inscricoesDaTabela);

  const inscricaoStatusCounts = useMemo(() => {
    return list.reduce((counts, inscricao) => {
      counts[inscricao.status] = (counts[inscricao.status] || 0) + 1;
      return counts;
    }, {});
  }, [list]);

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    closeModal();
  };

  return (
    <Container>
      <CardsInfoDetails
        totalInscricoes={list.length}
        inscricaoAguardando={inscricaoStatusCounts["aguardando"] || 0}
        inscricaoPresente={inscricaoStatusCounts["presente"] || 0}
      />

      <SearchInput inscricoesDaTabela={inscricoesDaTabela} setList={setList} />

      <TableContainer>
        <Table style={{ borderBottomWidth: 0 }}>
          <Tr style={{ width: 230 }}>
            <Text weight="600">Nome</Text>
          </Tr>
          <Tr>
            <Text weight="600">Status</Text>
          </Tr>
          <Tr>
            <Text weight="600">Ação</Text>
          </Tr>
        </Table>
        <FlatList
          data={list}
          keyExtractor={(inscricao) => inscricao.id.toString()}
          renderItem={({ item: inscricao }) => (
            <Table>
              <ViewName>
                <Tr>
                  <Text>{inscricao.name}</Text>
                </Tr>
                <Tr style={{ width: 205 }}>
                  <Text>{inscricao.email}</Text>
                </Tr>
              </ViewName>
              <Tr>
                <Text style={{ textAlign: "center" }}>{inscricao.status}</Text>
              </Tr>
              <IconAction onPress={showModal}>
                <Feather name="check-circle" size={22} color="#43A53B" />
              </IconAction>
              <CustomModal
                visible={modalVisible}
                onClose={closeModal}
                onConfirm={handleConfirm}
              />
            </Table>
          )}
        />
      </TableContainer>
    </Container>
  );
}
