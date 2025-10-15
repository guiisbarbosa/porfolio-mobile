import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.c950,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  mainText: {
    color: theme.colors.neutralLight,
    marginBottom: 20,
    fontSize: 14,
    textAlign: "justify",
  },
  cardsContainer: {
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
