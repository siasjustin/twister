import React, { FC } from "react";

import { View } from "react-native";

import AnimTitle from "../animations/AnimItem";

///// Why will this not allow us to add these props to AnimTitle

interface HeaderProps {
  title: string;
  color: string;
}
const Header: FC<HeaderProps> = ({ title, color }) => {
  return (
    <View style={{ backgroundColor: "grey" }}>
      <AnimTitle title={title} color={color} />
    </View>
  );
};

export default Header;
