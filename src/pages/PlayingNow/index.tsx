import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { MusicList } from "../../components/MusicList";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
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
    </SafeAreaView>
  );
};
