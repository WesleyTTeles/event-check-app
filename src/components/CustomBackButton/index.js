import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

export default function CustomBackButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name="arrow-back" size={24} color="#605F69" />
    </TouchableOpacity>
  );
}
