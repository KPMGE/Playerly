import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  container: {
    height: 250,
    width: 190,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "75%",
    shadowColor: "#fff",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    marginTop: 16,
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  artist: {
    fontSize: 10,
    textTransform: "uppercase",
    marginTop: 5,
    fontWeight: "400",
    color: theme.colors.lightGray,
  },
});
