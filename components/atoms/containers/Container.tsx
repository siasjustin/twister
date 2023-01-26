import React, { FC, ReactNode } from "react";
import { View, Text } from "react-native";
import { styled } from "nativewind";

type ContainerProps = {
  children: ReactNode;
};

const ContainerView = styled(View);

const Container: FC<ContainerProps> = ({ ...props }) => (
  <ContainerView className="bg-black flex-1 items-center justify-center">
    {props.children}
  </ContainerView>
);

export default Container;
