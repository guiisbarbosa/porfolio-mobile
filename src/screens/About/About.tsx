import React from "react";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./About.styles";

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { SkillCard } from "../../components/SkillCard/SkillCard";

import { FontAwesome } from "@expo/vector-icons";

export const About = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: tabBarHeight }}
    >
      <Text style={styles.mainText}>
        Olá! Meu nome é Guilherme Silva Barbosa e sou uma pessoa que gosta muito
        de aprender.{"\n\n"}
        Atualmente, estudo React Native e tenho conhecimentos em HTML5, CSS3,
        JavaScript e React.{"\n\n"}
        Atualmente, trabalho como Designer Gráfico em uma empresa local, mas meu
        primeiro contato com tecnologia aconteceu aos 15 anos, quando conheci
        HTML, CSS e um pouco de Java.{"\n"}
        Apesar de ter me afastado da programação por algum tempo, retornei
        recentemente com vontade de me aprofundar e criar soluções através da
        tecnologia.{"\n\n"}
        Meu objetivo é me desenvolver continuamente, tanto como profissional
        quanto como ser humano, aplicando a tecnologia para resolver problemas e
        transformar ideias em realidade.
      </Text>

      <View style={styles.cardsContainer}>
        <SkillCard
          icon={
            <FontAwesome
              name="html5"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="HTML5"
        />

      </View>
    </ScrollView>
  );
};
