import React, { useState, useEffect, FC } from "react";

import { TouchableOpacity } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

import { PanGestureHandler } from "react-native-gesture-handler";

import { styled } from "nativewind";

const handleRotation = (rotation: Animated.SharedValue<number>) => {
  "worklet";
  return `${rotation.value * 2 * Math.PI}rad`;
};

interface aProps {
  isAnimating: boolean;
  // setIsAnimating?: Dispatch<SetStateAction<boolean>>;
}

const AnimatedItem: FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const opacity = useSharedValue(0.5);
  const scale = useSharedValue(0.3);
  const rotation = useSharedValue(0);

  const Anim = styled(Animated.View);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      borderRadius: rotation.value * 50,
      transform: [{ scale: scale.value }, { rotate: handleRotation(rotation) }],
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      opacity.value = withRepeat(withSpring(1), -1, true);
      scale.value = withRepeat(withSpring(2), -1, true);
      rotation.value = withRepeat(withSpring(1), -1, true);
    } else {
      opacity.value = withSpring(0.3);
      scale.value = withSpring(0.1);
      rotation.value = withSpring(4);
    }
  }, [isAnimating]);

  return (
    <TouchableOpacity onPress={() => setIsAnimating(!isAnimating)}>
      <Anim className="bg-pink-700 p-10" style={reanimatedStyle} />
    </TouchableOpacity>
  );
};

export default AnimatedItem;
