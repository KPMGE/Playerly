import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
//import { Home } from "./src/pages/Home";
import { PlayingNow } from "./src/pages/PlayingNow";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <PlayingNow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091227",
  },
});
