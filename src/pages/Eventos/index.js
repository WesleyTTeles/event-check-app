import React from "react";

import Header from "../../components/Header";
import CardsEventos from "../../components/CardsEventos";

import { listNames } from "../../mock/ListaEventos/listNames";
import { Text } from "../../components/Text/Text";
import { Container } from "../Home/styles";
import { Content } from "./styles";

export default function Eventos() {
  const hanleNextPage = (listName) => {
    alert("Proxima Pagina");
  };

  return (
    <Container>
      <Header>
        <Text size={18} weight={600} color={"#605F69"}>
          Eventos
        </Text>
      </Header>
      <Content>
        <CardsEventos onNextPage={hanleNextPage} listNames={listNames} />
      </Content>
    </Container>
  );
}
