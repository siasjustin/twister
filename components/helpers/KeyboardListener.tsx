import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { View, Text, Keyboard } from "react-native";

import { KeyboardStatusType } from "../templates/Page";

/*

Thist helper requires that you pass in the setKeyboardStatus and setKeyboard height state objects from its parent container
*/

type KeyboardHelperProps = {
  setKeyboardStatus: Dispatch<SetStateAction<KeyboardStatusType>>;
};

const KeyboardHelper: FC<KeyboardHelperProps> = ({ setKeyboardStatus }) => {
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
      // console.log("Keyboard Shown", e);
      setKeyboardStatus({ isOn: true, height: e.endCoordinates.height });
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", (e) => {
      console.log("Hidden");
      setKeyboardStatus({ isOn: false, height: 0 });
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return <></>;
};

export default KeyboardHelper;
