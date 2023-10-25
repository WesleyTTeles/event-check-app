import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Input, SearchWrapper } from "./styles";

export default function SearchInput() {
  const [input, setInput] = useState();

  return (
    <SearchWrapper>
      <Input
        placeholder="Pesquisar"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity>
        <Feather name="filter" size={24} color="#CDA35C" />
      </TouchableOpacity>
    </SearchWrapper>
  );
}
