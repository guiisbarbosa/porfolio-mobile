import React from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
} from "react-native";

import { styles } from "./Projects.styles";

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

import { dataProjects } from "../../data/dataProjects";

import { useImageStore } from "../../store/useImageStore";

export const Projects = () => {
  const image = useImageStore((state) => state.selectedImage);
  const setImage = useImageStore((state) => state.setSelectedImage);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.displayCards}>
          {dataProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.path}
              onPress={() => setImage(project)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.divisor} />

      <View style={styles.displayInfos}>
        {image == null ? (
          <Text style={styles.tagTitle}>Nenhum projeto selecionado</Text>
        ) : (
          <>
            <Text style={styles.sectionTitle}>Informações do projeto</Text>

            <Text style={styles.tagTitle}>Título do projeto:</Text>
            <Text style={styles.tagText}>{image?.title}</Text>

            <Text style={styles.tagTitle}>Descrição:</Text>
            <Text style={styles.tagText}>{image?.description}</Text>

            <Text style={styles.tagTitle}>Principal Tecnologia: </Text>
            <Text style={styles.tagText}>{image?.mainTechnology}</Text>

            <Text
              style={styles.repoLink}
              onPress={() => Linking.openURL(image?.repoLink)}
            >
              Acesse o Repositório
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
