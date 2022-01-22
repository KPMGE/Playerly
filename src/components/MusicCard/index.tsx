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

const defaultHeight = 243;
const defaultWidth = 190;

export const MusicCard: React.FC<MusicCardProps> = ({
  style = [],
  image,
  title,
  artist,
}): JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        { ...style },
        {
          height: defaultHeight,
          width: defaultWidth,
        },
      ]}
    >
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.artist}>{artist}</Text>
    </View>
  );
};
