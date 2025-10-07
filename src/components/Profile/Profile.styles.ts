import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    backgroundColor: "gray",
    borderWidth: 4,
    borderColor: "#4C1583",
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
    color: "#7F19E6",
    marginBottom: 20,
    fontWeight: "bold",
  },
  resume: {
    fontSize: 16,
    color: "#9AA1AD",
    marginBottom: 20,
    textAlign: "center",
  },
  badge: {
    backgroundColor: "#FACC15",
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
    color: "#7F19E6",
    fontSize: 14,
  },
});
