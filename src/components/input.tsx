import { ComponentProps } from "react";
import { HelperText, TextInput, useTheme } from "react-native-paper";
import { View } from "react-native";

type InputProps = {
  error?: string;
} & Omit<ComponentProps<typeof TextInput>, "error">;

export default function Input(props: InputProps) {
  const theme = useTheme();
  const { error, ref, ...rest } = props;
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: theme.colors.inverseOnSurface,
          minHeight: 20,
        }}
        {...rest}
        value={props.value}
      />
      <HelperText visible={!!props.error && props.error != ""} type="error">
        {props.error}
      </HelperText>
    </View>
  );
}
