import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Routes />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191121",
  },
});
