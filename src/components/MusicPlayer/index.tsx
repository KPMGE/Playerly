import React from "react";
import { View, Image, Text } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export const MusicPlayer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={10}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor={"#fff"}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#fff"
        onSlidingComplete={() => {}}
      />
      <View style={styles.mainContent}>
        <Image
          source={require("../../dummy_data/love_of_my_life.jpg")}
          style={styles.image}
        />

        <View style={styles.songDescription}>
          <Text style={styles.title}>music</Text>
          <Text style={styles.artist}>Artist</Text>
        </View>

        <View style={styles.playerButtons}>
          <Feather
            style={{ marginRight: 10 }}
            name="skip-back"
            size={35}
            color="#fff"
          />
          <Feather
            style={{ marginRight: 10 }}
            name="pause-circle"
            size={35}
            color="#fff"
          />
          <Feather name="skip-forward" size={35} color="#fff" />
        </View>
      </View>
    </View>
  );
};
