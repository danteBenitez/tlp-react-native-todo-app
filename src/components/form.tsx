import { Link } from "expo-router";
import { ReactNode } from "react";
import { View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import Input from "./input";

export default function Form(props: {
  heading: ReactNode;
  subheading: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <View style={[style.heading]}>
        {props.heading}
      </View>

      <View style={style.subheading}>
        {props.subheading}
      </View>
      <View style={style.fieldContainer}>
        {props.children}
      </View>
    </>
  );
}

const style = ScaledSheet.create({
  subheading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "4@s",
    textDecorationStyle: "solid",
    marginBottom: "20@s",
  },
  heading: {
    alignItems: "center",
    marginBottom: "20@s",
  },
  fieldContainer: {
    width: "100%",
    padding: "30@s",
    gap: "20@s",
  },
});
