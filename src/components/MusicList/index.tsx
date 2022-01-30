import React from "react";
import { FlatList, View, StyleProp, ViewStyle } from "react-native";
import { MusicCard } from "../MusicCard";

import dummy_artists from "../../dummy_data/dummy_artists.json";

interface MusicListProps {
  cardStyle?: StyleProp<ViewStyle>;
}

export const MusicList: React.FC<MusicListProps> = ({
  cardStyle,
}): JSX.Element => {
  return (
    <FlatList
      horizontal
      data={dummy_artists}
      keyExtractor={(item) => item.title}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginLeft: 20 }} />}
      renderItem={({ item }): any => (
        <MusicCard
          style={cardStyle}
          key={item.title}
          image={require("../../dummy_data/beliver.jpg")}
          title={item.title}
          artist={item.artist}
        />
      )}
    />
  );
};
