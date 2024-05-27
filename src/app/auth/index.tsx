import { View } from "react-native";
import { Text } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function AuthIndex() {
  return (
    <View style={style.container}>
        <Text>
            Hello, world
        </Text>    
    </View>
  );
}

const style = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        height: "100%",
        aspectRatio: 1,
    }
})
