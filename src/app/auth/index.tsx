import Form from "@/components/form";
import IconHeader from "@/components/icon-header";
import Input from "@/components/input";
import { useKeyboard } from "@/hooks/use-keyboard";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ImageBackground, KeyboardAvoidingView, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ScaledSheet } from "react-native-size-matters";
import { loginSchema } from "./_auth.schema";

export default function AuthIndex() {
  const theme = useTheme();
  const { control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema)
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
        <Controller
          name="username"
          control={control}
          render={({ field, formState: { errors } }) => {
            return <Input mode="outlined" label="Usuario" {...field} error={errors.username?.message} />
          }
          }
        />
        <Controller
          name="password"
          control={control}
          render={({ field, formState: { errors } }) => 
            <Input mode="outlined" label="Contraseña" {...field} error={errors.password?.message} />
          }
        />
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

