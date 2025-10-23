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
    alignItems: "center",
  },
  displayCards: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  displayInfos: {
    flex: 1,
    flexDirection: "column",
  },
  divisor: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.neutralDark,
    marginVertical: 20,
  },
});
