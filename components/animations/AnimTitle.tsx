import React, { FC } from "react";

import { Text, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
// import { styled } from "nativewind";

type TitleProps = {
  title: string;
  color: string;
};

const { width } = Dimensions.get("window");

const AnimTitle: FC<TitleProps> = ({ title, color }) => {
  // const TitleHolder = styled(Animated.View);
  // const TheTitle = styled(Text);

  return (
    <Animated.View className="flex-1 bg-red-900 w-full justify-center align-center">
      <Text className={`${color} text-center`}>{title}</Text>
    </Animated.View>
  );
};

export default AnimTitle;
