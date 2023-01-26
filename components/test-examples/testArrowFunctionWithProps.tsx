import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const handleRotation = (opacity: Animated.SharedValue<number>) => {
  "worklet";
  return `${opacity.value * 2 * Math.PI}rad`;
};

type animatedProperties = {
  opacity: number;
  borderRadius: number;
  transform: [{ scale: number }, { rotate: string }];
};

const handleAnimation = (
  opacity: Animated.SharedValue<number>,
  scale: Animated.SharedValue<number>,
  isAnimating: boolean
): animatedProperties => {
  return {
    opacity: opacity.value,
    borderRadius: opacity.value * 50,
    transform: [{ scale: scale.value }, { rotate: handleRotation(opacity) }],
  };
};
