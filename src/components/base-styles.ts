import { ScaledSheet } from "react-native-size-matters";

export const baseStyles = ScaledSheet.create({
    baseText: {
        height: "auto",
        paddingTop: 20,
        paddingHorizontal: 20,
        lineHeight: 18,
    },
    heading: {
        fontWeight: 800,
        fontSize: 30,
    },
    subheading: {
        marginTop: "20@s",
        fontWeight: 400,
        fontSize: 20,
    },
    listItem: {
    },
    listItemContent: {
        padding: "10@s",
    }
})