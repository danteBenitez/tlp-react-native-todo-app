import Form from "@/components/form";
import IconHeader from "@/components/icon-header";

import { ImageBackground, KeyboardAvoidingView, View } from "react-native";
import { ReactNode } from "react";
import { ScaledSheet } from "react-native-size-matters";
import { useTheme } from "react-native-paper";
import WithImageBackground from "./with-image-background";

export default function FormLayout(props: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <WithImageBackground>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "stretch",
            height: "100%",
            width: "100%",
          }}
        >
          <KeyboardAvoidingView
            behavior="padding"
            style={[style.card, { backgroundColor: theme.colors.background }]}
          >
            <View
              style={{
                height: 50,
                position: "relative",
                bottom: 160,
              }}
            >
              <IconHeader icon="pencil" size={200} />
            </View>
            {props.children}
          </KeyboardAvoidingView>
        </View>
    </WithImageBackground>
  );
}

const style = ScaledSheet.create({
  form: {
    width: "100%",
    padding: "3@s",
  },
  
  card: {
    paddingVertical: "30@s",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80%",
    position: "relative",
  },
});
