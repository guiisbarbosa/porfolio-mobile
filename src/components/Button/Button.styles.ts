import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primary: {
    backgroundColor: theme.colors.c800,
  },
  secondary: {
    backgroundColor: theme.colors.highlight,
  },
  primaryText: {
    color: theme.colors.c400,
  },
  secondaryText: {
    color: theme.colors.c800,
  },
});
