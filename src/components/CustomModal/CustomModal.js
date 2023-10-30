import React from "react";
import { Modal, View, Text } from "react-native";
import {
  styles,
  ConfirmContainer,
  TextConfirm,
  ButtonContainer,
  ConfirmButton,
  TextConfirmButton,
  CancelButton,
  TextCancelButton,
} from "./styles";

const CustomModal = ({
  visible,
  onClose,
  onConfirm,
  inscricaoStatusCounts,
}) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <ConfirmContainer style={styles.modalContainer}>
        <View style={[styles.modalContent, { backgroundColor: "white" }]}>
          <TextConfirm>Deseja confirmar a presença</TextConfirm>
          <ButtonContainer>
            <ConfirmButton onPress={onConfirm}>
              <TextConfirmButton>Confirmar</TextConfirmButton>
            </ConfirmButton>
            <CancelButton onPress={onClose}>
              <TextCancelButton>Cancelar</TextCancelButton>
            </CancelButton>
          </ButtonContainer>
        </View>
      </ConfirmContainer>
    </Modal>
  );
};

export default CustomModal;
