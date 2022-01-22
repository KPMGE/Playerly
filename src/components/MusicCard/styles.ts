import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  artist: {
    fontSize: 10,
    fontWeight: "400",
    color: theme.colors.lightGray,
  },
});
