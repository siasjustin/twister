import { FC } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

import Container from "../atoms/containers/Container";
import AnimItem from "../animations/AnimItem";
import AnimTitle from "../animations/AnimTitle";
// import Header from "../organisms/Header";

interface PageProps {
  title: string;
  index: number;
  backgroundColor: string;
  color: string;
}

const Page: FC<PageProps> = ({ title, index, backgroundColor, color }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <SafeAreaView>
        <View style={styles.headerHolder}>
          <AnimTitle title={title} color={color} />
        </View>
        <View style={styles.centerer}>{index === 0 && <AnimItem />}</View>
        <View />
      </SafeAreaView>
    </Container>
  );
};

export default Page;

const styles = StyleSheet.create({
  headerHolder: {
    height: 200,
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
