import React, { FC, ReactNode, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Animated from "react-native-reanimated";

import Page from "./components/templates/Page";

const PAGES = [
  { title: "Drag", bg: "rgba(0, 0, 0, 1)", color: "white" },
  { title: "Tag", bg: "rgba(0, 0, 0, .6)", color: "yellow" },
  { title: "Brag", bg: "rgba(0, 0, 0, .4)", color: "#eeeeee" },
];

export default function App() {
  return (
    <Animated.ScrollView horizontal>
      {PAGES.map((page, index) => {
        return (
          <Page
            key={index.toString()}
            title={page.title}
            index={index}
            backgroundColor={page.bg}
            color={page.color}
          />
        );
      })}
      {/* <StatusBar style="auto" /> */}
    </Animated.ScrollView>
  );
}
