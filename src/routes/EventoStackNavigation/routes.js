import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "react-native-vector-icons";

import Eventos from "../../pages/Eventos";
import CafeeGestao from "../../pages/SubMenuEventos/CafeeGestao";
import ProjetoGerminar from "../../pages/SubMenuEventos/ProjetoGerminar";
import RenoGrupo from "../../pages/SubMenuEventos/RenoGrupo";
import EventosAbertos from "../../pages/SubMenuEventos/EventosAbertos";

const Stack = createStackNavigator();

export const EventStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Event"
      component={Eventos}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Cafe & Gestão"
      component={CafeeGestao}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <MaterialIcons name="keyboard-arrow-left" size={28} color="#605F69" />
        ),
      }}
    />
    <Stack.Screen
      name="Projeto Germinar"
      component={ProjetoGerminar}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <MaterialIcons name="keyboard-arrow-left" size={28} color="#605F69" />
        ),
      }}
    />
    <Stack.Screen
      name="Eventos Abertos"
      component={EventosAbertos}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <MaterialIcons name="keyboard-arrow-left" size={28} color="#605F69" />
        ),
      }}
    />
    <Stack.Screen
      name="Reno Grupo"
      component={RenoGrupo}
      options={{
        headerTitleStyle: {
          color: "#605F69",
          fontSize: 18,
        },
        headerBackImage: () => (
          <MaterialIcons name="keyboard-arrow-left" size={28} color="#605F69" />
        ),
      }}
    />
  </Stack.Navigator>
);
