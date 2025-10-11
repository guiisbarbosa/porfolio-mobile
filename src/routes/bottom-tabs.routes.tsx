import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { Home } from "../screens/Home/Home";
import { Projects } from "../screens/Projects/Projects";
import { Contact } from "../screens/Contact/Contact";
import { About } from "../screens/About/About";
import type { BottomTabParamList } from "../types/routes.types";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#191121",
          borderBottomColor: "#302937",
          borderBottomWidth: 1,
          elevation: 0,
          shadowColor: "transparent",
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#191121",
          borderTopColor: "#1F2937",
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#FACC15",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Sobre"
        component={About}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Projetos"
        component={Projects}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="code" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Contato"
        component={Contact}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope" size={20} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
