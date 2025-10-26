import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: theme.colors.neutralDark,
    backgroundColor: theme.colors.neutralLight,
    overflow: "hidden",
  },
})