import { ReactNode } from "react";
import { ImageBackground, View, ImageSourcePropType } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function WithImageBackground(props: { children: ReactNode, source?: ImageSourcePropType }) {
  return (
    <View style={style.container}>
      <ImageBackground
        source={props.source ?? require("../../assets/images/background-flipped.jpg")}
        style={style.image}
        resizeMode="cover"
      >{props.children}</ImageBackground>
    </View>
  );
}

const style = ScaledSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
