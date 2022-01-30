import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { MusicList } from "../../components/MusicList";
import { Feather, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import { theme } from "../../global/theme";

export const PlayingNow: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={33} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>
      </View>

      <View>
        <MusicList cardStyle={styles.cardStyle} />
      </View>

      <View style={styles.middleButtons}>
        <AntDesign name="sound" size={22} color={theme.colors.faddedBlue} />
        <View style={{ flexDirection: "row" }}>
          <Feather
            style={{ marginRight: 20 }}
            name="repeat"
            size={20}
            color={theme.colors.faddedBlue}
          />
          <FontAwesome
            name="random"
            size={20}
            color={theme.colors.faddedBlue}
          />
        </View>
      </View>

      <View style={styles.playButtonsContainer}>
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

        <View style={styles.playButtons}>
          <View style={styles.play}>
            <TouchableOpacity>
              <Ionicons name="play-skip-back-outline" size={50} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="pause" size={50} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons
                name="play-skip-forward-outline"
                size={50}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
