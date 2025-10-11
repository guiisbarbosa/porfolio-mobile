import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    backgroundColor: theme.colors.neutral,
    borderWidth: 4,
    borderColor: theme.colors.c600,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageProfile: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  role: {
    fontSize: 14,
    color: theme.colors.c600,
    marginBottom: 20,
    fontWeight: "bold",
  },
  resume: {
    fontSize: 16,
    color: theme.colors.neutral,
    marginBottom: 20,
    textAlign: "center",
  },
  badge: {
    backgroundColor: theme.colors.highlight,
    padding: 8,
    height: 36,
    width: 36,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  badgeText: {
    fontWeight: "bold",
    color: theme.colors.c800,
    fontSize: 14,
  },
});
