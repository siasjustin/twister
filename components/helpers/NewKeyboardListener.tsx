import React, { useState, useEffect, FC } from "react";
import { Keyboard } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export type KeyboardStatusType = {
  isOn: boolean;
  height: number;
};

const KeyboardHelper: FC = (): JSX.Element => {
  const offset = useSharedValue(0);

  const [keyboardStatus, setKeyboardStatus] = useState<KeyboardStatusType>({
    isOn: false,
    height: 0,
  });

  const keyboardBoosterStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(offset.value),
    };
  }, []);

  useEffect(() => {
    if (keyboardStatus.isOn) {
      console.log("Status is ON!!!", keyboardStatus);
    } else {
      console.log("WOMP WOMP", keyboardStatus);
    }
    offset.value = keyboardStatus.height + 70;
  }, [keyboardStatus]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
      // console.log("Keyboard Shown", e);
      setKeyboardStatus({ isOn: true, height: e.endCoordinates.height });
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", (e) => {
      console.log("Hidden");
      setKeyboardStatus({ isOn: false, height: 0 });
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return <Animated.View style={keyboardBoosterStyle} />;
};

export default KeyboardHelper;
