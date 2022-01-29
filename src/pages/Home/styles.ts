import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 20,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 24,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 20,
  },
});
