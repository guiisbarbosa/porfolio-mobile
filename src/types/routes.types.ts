import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type BottomTabParamList = {
  Home: undefined;
  Sobre: undefined;
  Projetos: undefined;
  Contato: undefined;
};

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  "Home"
>;