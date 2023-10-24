import React from "react";

import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EventStackNavigator } from "../EventoStackNavigation/routes";

import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

import Home from "../../pages/Home";
import MinhaConta from "../../pages/MinhaConta";

const Tab = createBottomTabNavigator();
const isAndroid = Platform.OS === "android";
const paddingBottomOS = isAndroid ? 10 : 26;
const heightOS = isAndroid ? 60 : 84;

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#2A2A37",
          borderTopWidth: 0,
          paddingTop: 10,
          paddingBottom: paddingBottomOS,
          height: heightOS,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#848389",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Eventos"
        component={EventStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Minha Conta"
        component={MinhaConta}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
