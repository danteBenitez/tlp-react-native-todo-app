import { ReactElement, ReactNode } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function Form(props: { children: ReactNode }) {
    return <View style={style.form}>
        {props.children}
    </View>
}

const style = ScaledSheet.create({
    form: {
        width: '100%',
        padding: '3@s'
    }
});