import React, { FC, ReactNode, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Animated from "react-native-reanimated";

import { TouchableOpacity } from "react-native";
import { styled } from "nativewind";

import Page from "./components/templates/Page";

const PAGES = [
  { title: "Drag", bg: "bg-black", color: "text-red-300" },
  { title: "Tag", bg: "bg-red-500", color: "text-blue-700" },
  { title: "Brag", bg: "bg-blue-600", color: "text-indigo-500" },
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
            bg={page.bg}
            color={page.color}
          />
        );
      })}
      {/* <StatusBar style="auto" /> */}
    </Animated.ScrollView>
  );
}
