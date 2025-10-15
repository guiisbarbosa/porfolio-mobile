import React from "react";
import { View, Linking } from "react-native";

import { styles } from "./Home.styles";
import { Profile } from "../../components/Profile/Profile";
import { Button } from "../../components/Button/Button";

import type { HomeScreenNavigationProp } from "../../types/routes.types";

import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  function handleContatctNavigation() {
    navigation.navigate("Contato");
  }

  function handleLinkedinNavigation() {
    Linking.openURL("https://www.linkedin.com/in/guiisbarbosa/");
  }

  function handleCurriculumNavigation() {
    Linking.openURL(
      "https://drive.google.com/file/d/176q42EOxinjZTiYHHE5tCK6mxIb_-1B2/view"
    );
  }

  return (
    <View style={styles.container}>
      <Profile />
      <Button variant="primary" label="Linkedin" onPress={handleLinkedinNavigation} />
      <Button variant="primary" label="Ver currículo" onPress={handleCurriculumNavigation}/>
      <Button variant="secondary" label="Contato" onPress={handleContatctNavigation} />
    </View>
  );
};
