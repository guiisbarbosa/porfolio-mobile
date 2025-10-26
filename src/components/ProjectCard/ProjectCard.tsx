import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./ProjectCard.style";

export const ProjectCard = ({
  image,
  onPress,
}: {
  image: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      {image ? (
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
      ) : (
        <Text>Imagem não carregada</Text>
      )}
    </View>
  );
};
