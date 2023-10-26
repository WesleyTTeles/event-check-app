import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import logo from "../../assets/images/logo.png";

import { Text } from "../Text/Text";
import {
  Container,
  ImageLogo,
  Input,
  InputArea,
  IconTouch,
  ButtonEntrar,
  InputContainer,
  IconArea,
  OptionsView,
  ForgotPassword,
  RememberPassword,
} from "./styles";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <ImageLogo source={logo} />
      <Text>Utilize suas credenciais para acessar</Text>

      <InputContainer>
        <Text weight="600" style={{ marginLeft: 6 }}>
          Email
        </Text>
        <InputArea>
          <IconArea>
            <FontAwesome name="envelope" size={20} color="#cda35c" />
          </IconArea>
          <Input
            placeholder="meuemail@meudominio.com.br"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </InputArea>

        <Text weight="600" style={{ marginLeft: 6 }}>
          Senha
        </Text>
        <InputArea>
          <IconArea>
            <FontAwesome name="lock" size={24} color="#cda35c" />
          </IconArea>

          <Input
            placeholder="Insira sua Senha"
            secureTextEntry={hidePassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <IconTouch
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <FontAwesome
              name={hidePassword === true ? "eye-slash" : "eye"}
              size={24}
              color="#cda35c"
            />
          </IconTouch>
        </InputArea>

        <OptionsView>
          <RememberPassword>
            <CheckBox style={{ marginLeft: -20 }} />
            <Text style={{ marginLeft: -20 }}>Lembrar Senha</Text>
          </RememberPassword>
          <ForgotPassword>
            <Text color={"#CDA35C"}>Esqueci minha senha</Text>
          </ForgotPassword>
        </OptionsView>

        <ButtonEntrar>
          <Text weight="600" size={22} style={{ color: "#ffffff" }}>
            Entrar
          </Text>
        </ButtonEntrar>
      </InputContainer>
    </Container>
  );
}
