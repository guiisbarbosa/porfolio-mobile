import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: theme.colors.neutralDark
  },
  text: {
    color: theme.colors.neutralLight,
    fontSize: 12
  }
})