import { FC, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import KeyboardListener from "../helpers/NewKeyboardListener";

const SIZE = 320;

const Tagging: FC = (): JSX.Element => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const AnimatedImage = Animated.createAnimatedComponent(Image);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: (event) => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -SIZE / 2 },
        { translateY: -SIZE / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: SIZE / 2 },
        { translateY: SIZE / 2 },
      ],
    };
  });

  const fPStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "red",
        width: "100%",
      }}
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "indigo",
          justifyContent: "center",
        }}
      >
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Animated.View style={{ flex: 1 }}>
            <AnimatedImage
              source={require("../../assets/group.jpg")}
              style={[rStyle, { width: SIZE, height: SIZE }]}
            />
            <Animated.View style={[style.focalPoint, fPStyle]} />
          </Animated.View>
        </PinchGestureHandler>
        <View>
          <TextInput
            style={{
              padding: 10,
              backgroundColor: "black",
              marginTop: 20,
              width: SIZE,
              color: "white",
            }}
            value="hi"
          />
        </View>
        <KeyboardListener />
      </View>
    </ScrollView>
  );
};
export default Tagging;

const style = StyleSheet.create({
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderRadius: 10,
    opacity: 0.6,
  },
});
