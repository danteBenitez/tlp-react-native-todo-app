import Form from "@/components/form";
import IconHeader from "@/components/icon-header";

import { ImageBackground, KeyboardAvoidingView, View } from "react-native";
import { ReactNode } from "react";
import { ScaledSheet } from "react-native-size-matters";
import { useTheme } from "react-native-paper";

export default function FormLayout(props: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../../assets/images/background-flipped.jpg")}
        style={style.image}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior="position"
          style={{
            width: "100%",
            height: "100%",
          }}
          contentContainerStyle={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "stretch",
            height: "100%",
            width: "100%",
          }}
        >
          <View
            style={[style.card, { backgroundColor: theme.colors.background }]}
          >
            <View
              style={{
                position: "absolute",
                top: -100,
              }}
            >
              <IconHeader icon="pencil" size={200} />
            </View>
            {props.children}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const style = ScaledSheet.create({
  form: {
    width: "100%",
    padding: "3@s",
  },
  container: {
    position: "relative",
    height: "100%",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  card: {
    paddingVertical: "30@s",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    position: "relative",
  },
});
