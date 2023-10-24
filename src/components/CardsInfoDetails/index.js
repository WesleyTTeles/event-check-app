import React from "react";

import { Text } from "../Text/Text";
import { FontAwesome5 } from "@expo/vector-icons";
import { CardInfo, CardWrapper, Container } from "./styled";

export default function CardsInfoDetails({
  totalInscricoes,
  inscricaoAguardando,
  inscricaoPresente,
}) {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <CardWrapper>
        <FontAwesome5 name="user-alt" size={32} color="#FFFFFF" />
        <CardInfo>
          <Text weight={"600"} size={24} color={"#ffffff"}>
            {totalInscricoes}
          </Text>
          <Text size={18} color={"#ffffff"}>
            Inscricoes
          </Text>
        </CardInfo>
      </CardWrapper>
      <CardWrapper>
        <FontAwesome5 name="user-check" size={32} color="#FFFFFF" />
        <CardInfo>
          <Text weight={"600"} size={24} color={"#ffffff"}>
            {inscricaoAguardando}
          </Text>
          <Text size={18} color={"#ffffff"}>
            Presentes
          </Text>
        </CardInfo>
      </CardWrapper>
      <CardWrapper>
        <FontAwesome5 name="user-clock" size={32} color="#FFFFFF" />
        <CardInfo>
          <Text weight={"600"} size={24} color={"#ffffff"}>
            {inscricaoPresente}
          </Text>
          <Text size={18} color={"#ffffff"}>
            Aguardando
          </Text>
        </CardInfo>
      </CardWrapper>
    </Container>
  );
}
