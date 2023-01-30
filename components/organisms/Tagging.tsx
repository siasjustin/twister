import { FC, useEffect } from "react";
import { ScrollView, View, Text, TextInput, Image } from "react-native";
import KeyboardListener from "../helpers/NewKeyboardListener";

const SIZE = 320;

const Tagging: FC = (): JSX.Element => {
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
        </View>
        <KeyboardListener />
      </View>
    </ScrollView>
  );
};
export default Tagging;
