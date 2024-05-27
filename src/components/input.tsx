import { ComponentProps } from "react"
import { TextInput, useTheme } from "react-native-paper"

export default function Input(props: ComponentProps<typeof TextInput>) {
    const theme = useTheme();
    return <TextInput style={{
        backgroundColor: theme.colors.primaryContainer,
        minHeight: 20
    }} {...props} />;
}