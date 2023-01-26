import { Text } from "react-native";
import { styled } from "nativewind";

const ContentView = styled(Text);

const Content = ({}) => {
  return (
    <ContentView className="text-white  p-10">
      <Text>Go Yo</Text>
    </ContentView>
  );
};

export default Content;
