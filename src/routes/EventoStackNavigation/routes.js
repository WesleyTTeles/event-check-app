import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

import Eventos from "../../pages/Eventos";
import TableCafeeGestao from "../../pages/SubMenuEventos/CafeeGestao";
import TableProjetoGerminar from "../../pages/SubMenuEventos/ProjetoGerminar";
import TableRenoGrupo from "../../pages/SubMenuEventos/RenoGrupo";
import TableEventosAbertos from "../../pages/SubMenuEventos/EventosAbertos";
import CheckList from "../../components/CheckList";

const Stack = createStackNavigator();

export const EventStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name=" "
      component={Eventos}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Eventos Abertos"
      component={TableEventosAbertos}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <Ionicons name="ios-arrow-back" size={24} color="#605F69" />
        ),
      }}
    />
    <Stack.Screen
      name="Cafe & Gestão"
      component={TableCafeeGestao}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <Ionicons name="ios-arrow-back" size={24} color="#605F69" />
        ),
      }}
    />
    <Stack.Screen
      name="Projeto Germinar"
      component={TableProjetoGerminar}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <Ionicons name="ios-arrow-back" size={24} color="#605F69" />
        ),
      }}
    />

    <Stack.Screen
      name="Reno Grupo"
      component={TableRenoGrupo}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <Ionicons name="ios-arrow-back" size={24} color="#605F69" />
        ),
      }}
    />
    <Stack.Screen
      name="CheckList"
      component={CheckList}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <Ionicons name="ios-arrow-back" size={24} color="#605F69" />
        ),
      }}
    />
  </Stack.Navigator>
);
