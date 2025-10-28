import { View, Image, Text, TouchableOpacity, type ImageSourcePropType } from "react-native";
import React from "react";

import { styles } from "./ProjectCard.style";

export const ProjectCard = ({
  image,
  onPress,
}: {
  image: ImageSourcePropType;
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      {image ? (
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
          <Image
            source={image}
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
      ) : (
        <Text>Imagem não carregada</Text>
      )}
    </View>
  );
};
