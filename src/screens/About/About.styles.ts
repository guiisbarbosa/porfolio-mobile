import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.c950,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  mainText: {
    color: theme.colors.neutralLight,
    fontSize: 14,
    textAlign: "justify",
  },
  divisor: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.neutralDark,
    marginVertical: 20,
  },
  titles: {
    fontSize: 16,
    color: theme.colors.neutralLight,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  hardSkillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  icon: {
    color: theme.colors.c400,
    fontSize: 48,
  },
});
