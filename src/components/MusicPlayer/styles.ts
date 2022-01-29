import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    marginBottom: 50,
  },
  slider: {
    width: "100%",
    height: 40,
    flexDirection: "row",
  },
  mainContent: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 3,
  },
  songDescription: {
    flexDirection: "column",
    marginLeft: 30,
  },
  title: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 26,
  },
  artist: {
    fontSize: 10,
    textTransform: "uppercase",
    marginTop: 8,
    fontWeight: "400",
    color: theme.colors.lightGray,
  },
  playerButtons: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
