import Form from "@/components/form";
import IconHeader from "@/components/icon-header";
import Input from "@/components/input";
import { useKeyboard } from "@/hooks/use-keyboard";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ImageBackground, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";
import { ScaledSheet } from "react-native-size-matters";

export default function AuthIndex() {
  const theme = useTheme();
  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: keyboard.height.value }],
    };
  });
  return (
    <>
      <View style={style.container}>
        <ImageBackground
          source={require("../../../assets/images/dragon-scales.png")}
          style={style.image}
          resizeMode="cover"
        >
          <Animated.ScrollView style={{
            width: '100%',
          }} contentContainerStyle={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "stretch",
            height: "100%",
            width: "100%",
          }}
            automaticallyAdjustKeyboardInsets={true}
          >
            <IconHeader icon="pencil" size={200} />
            /[A-Z]+[a-z]+|[a-z]+[A-Z]/
            <View
              style={[
                style.card,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <View style={[style.heading]}>
                <Text
                  variant="headlineLarge"
                  style={{
                    fontWeight: 800,
                  }}
                >
                  Inicio de sesión
                </Text>
              </View>
              <Form>
                <View style={style.subheading}>
                  <Text variant="bodyMedium">¿Aún no estás registrado?</Text>
                  <Link
                    href={{
                      pathname: "/auth/sign-up",
                    }}
                  >
                    <Text
                      style={{
                        color: theme.colors.primary,
                      }}
                    >
                      Regístrate
                    </Text>
                  </Link>
                </View>
                <View style={style.fieldContainer}>
                  <Input mode="outlined" label="Usuario" />
                  <Input mode="outlined" label="Contraseña" />
                  <Button
                    mode="contained"
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      width: "100%",
                      backgroundColor: theme.colors.primary,
                    }}
                  >
                    Iniciar sesión
                  </Button>
                </View>
              </Form>
            </View>
          </Animated.ScrollView>
        </ImageBackground>
      </View>
    </>
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
  card: {
    paddingVertical: "30@s",
    // width: "95%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70%",
    position: "relative",
  },
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
    padding: "28@s",
    gap: "20@s",
  },
});
