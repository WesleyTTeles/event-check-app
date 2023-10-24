import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckList from "../../components/CheckList";

const Stack = createStackNavigator();

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CheckList" component={CheckList} />
    </Stack.Navigator>
  );
}
