import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.c950,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    justifyContent: "center",
  },
  displayCards: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
    height: 0,
  },
  divisor: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.neutralDark,
    marginVertical: 20,
  },
  displayInfos: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  sectionTitle: {
    color: theme.colors.neutralLight,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  tagTitle: {
    color: theme.colors.neutral,
    fontSize: 12,
  },
  tagText: {
    fontSize: 14,
    marginBottom: 10,
    color: theme.colors.neutralLight,
  },
  repoLink: {
    color: theme.colors.c600,
    alignSelf: "center",
  }
});
