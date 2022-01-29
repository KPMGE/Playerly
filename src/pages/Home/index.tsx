import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { MusicList } from "../../components/MusicList";
import { MusicPlayer } from "../../components/MusicPlayer";
import styles from "./styles";

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Recommended for you</Text>
        <MusicList />

        <Text style={[styles.title, { marginTop: 42 }]}>My Playlist</Text>
        <MusicList />
      </View>

      <MusicPlayer />
    </SafeAreaView>
  );
};
