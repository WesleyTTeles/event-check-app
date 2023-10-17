import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.Image`
  width: 300px;
  height: 100px;
`;

export const InputContainer = styled.View`
  width: 100%;
  padding: 6px 18px;
  margin-top: 22px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  padding: 0 10px;
  margin: 6px 0;
  background-color: #eff1f5;
`;

export const Input = styled.TextInput`
  height: 52px;
  width: 80%;
  padding-left: 5px;
`;

export const IconArea = styled.View`
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 10%;
`;

export const IconTouch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 10%;
`;

export const OptionsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RememberPassword = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: -14px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  align-items: flex-end;
  padding-right: 10px;
`;

export const ButtonEntrar = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 20px;
  background-color: #cda35c;
  margin-top: 35px;
`;
