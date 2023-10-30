import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export const ConfirmContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const TextConfirm = styled.Text`
  font-size: 18px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 150px;
  background-color: #43a53b;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;

export const TextConfirmButton = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 150px;
  border: 1px solid red;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;

export const TextCancelButton = styled.Text`
  text-align: center;
  color: #000;
  font-size: 16px;
`;
