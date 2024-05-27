import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function IconHeader(props: { icon: string, size?: number }) {
  return (
    <View style={style.header}>
      <Avatar.Icon {...props}></Avatar.Icon>
    </View>
  );
}

const style = ScaledSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20@s'
    }
});
