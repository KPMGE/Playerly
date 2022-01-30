import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  cardStyle: {
    height: 400,
    width: 300,
  },
  header: {
    paddingHorizontal: 20,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  middleButtons: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
