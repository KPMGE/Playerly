import React from "react";
import { FlatList, View } from "react-native";
import { MusicCard } from "../MusicCard";

import dummy_artists from "../../dummy_data/dummy_artists.json";

export const MusicList: React.FC = (): JSX.Element => {
  return (
    <FlatList
      horizontal
      data={dummy_artists}
      keyExtractor={(item) => item.title}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginLeft: 20 }} />}
      renderItem={({ item }): any => (
        <MusicCard
          key={item.title}
          image={require("../../dummy_data/love_of_my_life.jpg")}
          title={item.title}
          artist={item.artist}
        />
      )}
    />
  );
};
