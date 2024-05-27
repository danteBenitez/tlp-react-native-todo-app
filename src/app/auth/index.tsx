import Form from "@/components/form";
import IconHeader from "@/components/icon-header";
import Input from "@/components/input";
import { Link, Stack } from "expo-router";
import { ImageBackground, View } from "react-native";
import { Avatar, Button, Text, TextInput, useTheme } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

const image = { uri: '../../../assets/images/splash.png' }

export default function AuthIndex() {
  const theme = useTheme();
  return (
    <>
      <View style={style.container}>
        <ImageBackground source={require("../../../assets/images/dragon-scales.png")} imageStyle={style.image} resizeMode="cover">
          <View style={style.card}>
            <IconHeader icon="pencil" size={120} />
            <View style={style.heading}>
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
                <View>
                  <Input label="Usuario" />
                </View>
                <View>
                  <Input label="Contraseña" />
                </View>
                <View>
                  <Button mode="contained">Iniciar sesión</Button>
                </View>
              </View>
            </Form>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const style = ScaledSheet.create({
  container: {
    height: "100%",
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: "center",
  },
  image: {
    justifyContent: 'center',
    alignItems: "center",
    height: '300%',
    borderWidth: 1,
    borderColor: 'orangered',
  },
  card: {
    paddingVertical: "30@s",
    marginHorizontal: "10@s",
    borderRadius: 20,
  },
  subheading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "4@s",
    textDecorationStyle: "solid",
  },
  heading: {
    alignItems: "center",
  },
  fieldContainer: {
    padding: "20@s",
    gap: "20@s",
  },
});
