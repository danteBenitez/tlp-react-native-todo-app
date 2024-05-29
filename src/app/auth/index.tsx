import Form from "@/components/form";
import IconHeader from "@/components/icon-header";
import Input from "@/components/input";
import { useKeyboard } from "@/hooks/use-keyboard";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ImageBackground, KeyboardAvoidingView, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
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
      <Form
        heading={
          <Text
            variant="headlineLarge"
            style={{
              fontWeight: 800,
              color: theme.colors.primary,
            }}
          >
            Inicio de sesión
          </Text>
        }
        subheading={
          <>
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
          </>
        }
      >
        <Input mode="outlined" label="Usuario" />
        <Input mode="outlined" label="Contraseña" />
        <Button
          mode="contained"
          style={{
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 3,
            width: "100%",
            backgroundColor: theme.colors.primary,
          }}
        >
          Iniciar sesión
        </Button>
      </Form>
    </>
  );
}

const style = ScaledSheet.create({});
