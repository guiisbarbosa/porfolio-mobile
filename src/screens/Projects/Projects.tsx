import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./Projects.styles";

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

import { dataProjects } from "../../data/dataProjects";

export const Projects = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.displayCards}>
          {dataProjects.map((project) => (
            <ProjectCard
              key={project.id}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.divisor} />

      <View style={styles.displayInfos}>
        <Text>Título do projeto</Text>
        <Text>Objetivo do projeto</Text>
        <Text>Tecnologias utilizadas</Text>
      </View>
    </View>
  );
};
