import Form from "@/components/form";
import Input from "@/components/input";
import { Link } from "expo-router";
import { Button, Text, useTheme } from "react-native-paper";

export default function SignUp() {
  const theme = useTheme();
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
      <Input mode="outlined" label="Usuario" />
      <Input mode="outlined" label="Correo electrónico" />
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
        Registrarse
      </Button>
    </Form>
  );
}
