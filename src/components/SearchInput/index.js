import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Input, SearchWrapper } from "./styles";

export default function SearchInput({ inscricoesDaTabela, setList }) {
  const [searchInput, setSearchInput] = useState("");
  const [changeOrder, setChangeOrder] = useState(true);

  useEffect(() => {
    if (searchInput === "") {
      setList(inscricoesDaTabela);
    } else {
      setList(
        inscricoesDaTabela.filter((item) => {
          if (
            item.name.toLowerCase().indexOf(searchInput.toLocaleLowerCase()) >
            -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchInput]);

  const handleOrderClick = () => {
    let newList = [...inscricoesDaTabela];

    if (changeOrder) {
      newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    } else {
      newList.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
    }

    setList(newList);
    setChangeOrder(!changeOrder);
  };

  return (
    <SearchWrapper>
      <Input
        placeholder="Pesquise uma pessoa"
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
      />
      <TouchableOpacity onPress={handleOrderClick}>
        <MaterialCommunityIcons
          name={changeOrder ? "filter-off" : "filter"}
          size={28}
          color="#CDA35C"
        />
      </TouchableOpacity>
    </SearchWrapper>
  );
}
