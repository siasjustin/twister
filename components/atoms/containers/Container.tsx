import React, { FC, ReactNode } from "react";
import { View, Dimensions, StyleSheet } from "react-native";

type ContainerProps = {
  children: ReactNode;
  backgroundColor: string;
};

const { height, width } = Dimensions.get("window");

const Container: FC<ContainerProps> = ({ ...props }) => {
  const { backgroundColor } = props;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height,
    width,
  },
});
