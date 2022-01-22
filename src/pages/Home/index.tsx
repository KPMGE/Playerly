import { MusicList } from "../../components/MusicList";
import { View, Text } from "react-native";
import styles from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Made for you</Text>
      <MusicList />
    </View>
  );
};
