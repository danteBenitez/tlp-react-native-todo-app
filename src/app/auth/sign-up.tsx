import Form from "@/components/form";
import { Link, router } from "expo-router";
import { Button, Text, useTheme } from "react-native-paper";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from "./_auth.schema";
import InputController from "@/components/input-controller";
import { signUp } from "@/services/auth";

export default function SignUp() {
  const theme = useTheme();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: ""
    },
    resolver: zodResolver(signUpSchema)
  });
  return (
    <Form
      heading={
        <Text
          variant="headlineLarge"
          style={{
            fontWeight: 800,
            color: theme.colors.primary
          }}
        >
          Registro de usuario
        </Text>
      }
      subheading={
        <>
          <Text variant="bodyMedium">¿Ya tienes una cuenta?</Text>
          <Link
            href={{
              pathname: "/auth/",
            }}
          >
            <Text
              style={{
                color: theme.colors.primary,
              }}
            >
                Inicia sesión
            </Text>
          </Link>
        </>
      }
    >
        <InputController
          name="username"
          control={control}
          inputProps={{
            mode: "outlined",
            label: "Usuario",
          }} 
        />
        <InputController
          name="email"
          controllerProps={{
          }}
          control={control}
          inputProps={{
            mode: "outlined",
            label: "Correo electrónico",
          }} 
        />

        <InputController
          name="password"
          control={control}
          inputProps={{
            mode: "outlined",
            label: "Contraseña",
            secureTextEntry: true,
          }} 
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
        onPress={handleSubmit(fields => {
          signUp(fields);
          router.navigate('/(app)');
        })}
      >
        Registrarse
      </Button>
    </Form>
  );
}
