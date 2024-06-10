import Form from "@/components/form";
import InputController from "@/components/input-controller";
import { useAuth } from "@/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import { Button, Text, useTheme } from "react-native-paper";
import { loginSchema } from "./_auth.schema";

export default function AuthIndex() {
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const { signIn } = useAuth()!;

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
        <InputController
          name="username"
          control={control}
          inputProps={{
            mode: "outlined",
            label: "Usuario",
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
          onPress={handleSubmit(async (fields) => {
            try {
              await signIn(fields);
            } catch (err) {
              if (err instanceof Error) {
                alert(err.message);
              }
              return;
            }
            router.replace("/(app)");
          })}
        >
          Iniciar sesión
        </Button>
      </Form>
    </>
  );
}
