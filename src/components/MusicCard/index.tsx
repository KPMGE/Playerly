import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewProps,
} from "react-native";
import styles from "./styles";

interface MusicCardProps {
  image: ImageSourcePropType;
  title: String;
  artist: String;
  style?: StyleProp<ViewProps>[];
}

export const MusicCard: React.FC<MusicCardProps> = ({
  style = [],
  image,
  title,
  artist,
}): JSX.Element => {
  return (
    <View style={[styles.container, { ...style }]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.artist}>{artist}</Text>
    </View>
  );
};
