import React, { useState, useEffect, FC } from "react";

import { View, TouchableOpacity } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from "react-native-reanimated";

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

import { styled } from "nativewind";

const handleRotation = (rotation: Animated.SharedValue<number>) => {
  "worklet";
  return `${rotation.value * 2 * Math.PI}rad`;
};

type ContextType = {
  translateX: number;
  translateY: number;
};

const AnimatedItem: FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const opacity = useSharedValue(0.5);
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const Anim = styled(Animated.View);
  const DropCircle = styled(View);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      borderRadius: rotation.value * 50,
      transform: [{ scale: scale.value }, { rotate: handleRotation(rotation) }],
    };
  }, []);

  const SIZE = 50;
  const CIRCLE_RADIUS = SIZE * 4;

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event) => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
    onCancel: (event) => {},
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (isAnimating) {
      opacity.value = withRepeat(withSpring(1), -1, true);
      scale.value = withRepeat(withSpring(2), -1, true);
      rotation.value = withRepeat(withSpring(1), -1, true);
    } else {
      opacity.value = withSpring(0.3);
      scale.value = withSpring(1);
      rotation.value = withSpring(4);
    }
  }, [isAnimating]);

  return (
    <DropCircle
      className="bg-slate-900 rounded-full items-center justify-center"
      style={{ width: CIRCLE_RADIUS * 2, height: CIRCLE_RADIUS * 2 }}
    >
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Anim
          className="bg-pink-700"
          style={[reanimatedStyle, rStyle, { height: SIZE, width: SIZE }]}
        />
      </PanGestureHandler>
    </DropCircle>
  );
};

export default AnimatedItem;

//

interface aProps {
  isAnimating: boolean;
  // setIsAnimating?: Dispatch<SetStateAction<boolean>>;
}
