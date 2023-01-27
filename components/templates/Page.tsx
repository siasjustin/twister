import { FC } from "react";
import { View, SafeAreaView } from "react-native";
// import { styled } from "nativewind";

import Container from "../atoms/containers/Container";
import AnimItem from "../animations/AnimItem";
import AnimTitle from "../animations/AnimTitle";
// import Header from "../organisms/Header";

interface PageProps {
  title: string;
  index: number;
  bg: string;
  color: string;
}

// const Header = styled(View);
// const Body = styled(View);

const Page: FC<PageProps> = ({ title, index, bg, color }) => {
  return (
    <Container bg={bg}>
      <SafeAreaView>
        <View className="bg-gray-400 h-60 justify-center item-center w-full">
          <AnimTitle title={title} color={color} />
        </View>
        <View className="flex-1 justify-center items-center bg-indigo-900">
          {index === 0 && <AnimItem />}
        </View>
        <View />
      </SafeAreaView>
    </Container>
  );
};

export default Page;
