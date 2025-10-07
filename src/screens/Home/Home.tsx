import React from "react";
import { View, Text } from "react-native";

import { styles } from "./Home.styles";
import { Profile } from "../../components/Profile/Profile";
import { Button } from "../../components/Button/Button";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Profile />
      <Button variant="primary" label="Linkedin" />
      <Button variant="primary" label="Ver currículo" />
      <Button variant="secondary" label="Contato" />
    </View>
  );
};
