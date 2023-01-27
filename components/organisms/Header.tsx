import React, { FC } from "react";

import { View } from "react-native";

import { styled } from "nativewind";

import AnimTitle from "../animations/AnimItem";

///// Why will this not allow us to add these props to AnimTitle

interface HeaderProps {
  title: string;
  color: string;
}

const HeaderHolder = styled(View);

const Header: FC<HeaderProps> = ({ title, color }) => {
  return (
    <HeaderHolder className="bg-red">
      <AnimTitle title={title} color={color} />
    </HeaderHolder>
  );
};

export default Header;
