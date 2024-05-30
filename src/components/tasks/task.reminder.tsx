import { View } from "react-native";
import { Avatar, Button, Icon, Text, TouchableRipple, useTheme } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import { baseStyles } from "../base-styles";
import { Task } from "@/interfaces/task";

export default function TaskReminder(props: {
  size: "big" | "small";
  task: Task;
}) {
  const theme = useTheme();
  const {
    primary: backgroundColor,
    onPrimary: foregroundColor,
  } = theme.colors;
  return (
    <TouchableRipple
      rippleColor={"red"}
      style={[
        style.hero,
        {
          minHeight: props.size === "big" ? 240 : 200,
          width: props.size === "big" ? "96%" : "96%",
          backgroundColor,
          alignSelf: "center",
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 5,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              marginTop: props.size == "big" ? 20 : 3,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              variant="bodyLarge"
              style={[
                baseStyles.baseText,
                style.heroText,
                {
                  color: foregroundColor,
                  fontSize: props.size == "big" ? 30 : 20,
                  lineHeight: 30
                },
              ]}
            >
              {props.task.title}
            </Text>
            <View style={style.avatar}>
              <Avatar.Icon icon="account" color={foregroundColor} size={props.size == "big" ? 50 : 40} />
              <Text style={{ color: foregroundColor }}>
                {props.task.author}
              </Text>
            </View>
          </View>
          <Text
            variant="bodyLarge"
            style={[
              baseStyles.baseText,
              {
                paddingVertical: 0,
                color: foregroundColor,
                height: "auto",
                minHeight: 40,
              },
            ]}
          >
            {props.task.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <DateWithIcon date={props.task.date} />
          <Button mode="elevated">Ver tarea</Button>
        </View>
      </View>
    </TouchableRipple>
  );
}

export function DateWithIcon(props: { date: Date }) {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingVertical: 20,
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text
        variant="bodyMedium"
        style={{
          color: theme.colors.onPrimary,
        }}
      >
        {props.date.toDateString()}
      </Text>
      <Icon source="clock-outline" size={30} color={theme.colors.onPrimary} />
    </View>
  );
}

const style = ScaledSheet.create({
  hero: {
    height: 200,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "red",
  },
  heroText: {
    fontWeight: 800,
    fontSize: 30,
  },
  avatar: {
    height: "auto",
    marginTop: 15,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    gap: 5,
    alignItems: "center",
    paddingHorizontal: "20@s",
  },
});
