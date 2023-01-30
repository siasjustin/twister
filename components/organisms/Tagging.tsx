import { FC, useEffect } from "react";
import { ScrollView, View, Text, TextInput, Image } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const SIZE = 320;

// would like this to be KeyboardStatusType but that was causing typescript issues
type KeyboardProps = {
  keyboardStatus: {
    isOn: boolean;
    height: number;
  };
};

const Tagging: FC<KeyboardProps> = ({ keyboardStatus }): JSX.Element => {
  const offset = useSharedValue(0);
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
        style={{ flex: 1, backgroundColor: "indigo", justifyContent: "center" }}
      >
        <Image
          source={require("../../assets/group.jpg")}
          style={{ width: SIZE, height: SIZE }}
        />
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
          <Animated.View style={keyboardBoosterStyle} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Tagging;
