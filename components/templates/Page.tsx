import { FC, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

import KeyboardListener from "../helpers/KeyboardListener";

import Container from "../atoms/containers/Container";
import AnimItem from "../animations/AnimItem";
import AnimTitle from "../animations/AnimTitle";
import Tagging from "../organisms/Tagging";
// import Header from "../organisms/Header";

interface PageProps {
  title: string;
  index: number;
  backgroundColor: string;
  color: string;
}

export type KeyboardStatusType = {
  isOn: boolean;
  height: number;
};

const Page: FC<PageProps> = ({ title, index, backgroundColor, color }) => {
  const [keyboardStatus, setKeyboardStatus] = useState<KeyboardStatusType>({
    isOn: false,
    height: 0,
  });

  return (
    <Container backgroundColor={backgroundColor}>
      <KeyboardListener setKeyboardStatus={setKeyboardStatus} />
      <SafeAreaView>
        <View style={styles.headerHolder}>
          <AnimTitle title={title} color={color} />
        </View>
        {index === 0 && (
          <View style={styles.centerer}>
            <Tagging keyboardStatus={keyboardStatus} />
          </View>
        )}
        {index === 1 && (
          <View style={styles.centerer}>
            <AnimItem />
          </View>
        )}
        <View />
      </SafeAreaView>
    </Container>
  );
};

export default Page;

const styles = StyleSheet.create({
  headerHolder: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  centerer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
