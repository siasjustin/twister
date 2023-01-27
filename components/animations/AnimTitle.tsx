import React, { FC } from "react";

import { Text, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

type TitleProps = {
  title: string;
  color: string;
};

const { width } = Dimensions.get("window");

const AnimTitle: FC<TitleProps> = ({ title, color }) => {
  return (
    <Animated.View style={styles.animated}>
      <Text style={{ color, textAlign: "center" }}>{title}</Text>
    </Animated.View>
  );
};

export default AnimTitle;

const styles = StyleSheet.create({
  animated: {
    width,
    flex: 1,
    // backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
