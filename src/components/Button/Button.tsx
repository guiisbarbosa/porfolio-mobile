import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "../../types/Button.types";

import { styles } from "./Button.styles";

export const Button = ({ variant, label }: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          variant === "primary" ? styles.primary : styles.secondary,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            variant === "primary" ? styles.primaryText : styles.secondaryText,
          ]}
        >
          {label}
          
        </Text>
      </TouchableOpacity>
    </View>
  );
};
