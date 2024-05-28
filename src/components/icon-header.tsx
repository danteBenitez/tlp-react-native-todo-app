import { View } from "react-native";
import { ComponentProps } from "react";
import { Avatar } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

type IconHeaderProps = {
  icon: string;
  size?: number;
} & ComponentProps<typeof Avatar.Icon>;

export default function IconHeader(props: IconHeaderProps) {
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
