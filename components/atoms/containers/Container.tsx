import React, { FC, ReactNode } from "react";
import { View, Dimensions } from "react-native";
// import { styled } from "nativewind";

type ContainerProps = {
  children: ReactNode;
  bg: string;
};

// const ContainerView = styled(View);

const { height, width } = Dimensions.get("window");

const Container: FC<ContainerProps> = ({ ...props }) => {
  // console.log("props: ", props);

  const { bg } = props;
  return (
    <View
      className={`flex-1 items-center justify-center w-full`}
      style={{ height: height, width: width }}
    >
      {props.children}
    </View>
  );
};

export default Container;
