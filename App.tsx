import React, { FC, ReactNode, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";

import { styled } from "nativewind";

import Container from "./components/atoms/containers/Container";
import AnimatedItem from "./components/atoms/animations/AnimatedItem";

export default function App() {
  return (
    <Container>
      <AnimatedItem />
      <StatusBar style="auto" />
    </Container>
  );
}
