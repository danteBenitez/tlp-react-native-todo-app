import { Tabs, router, useRouter } from "expo-router";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Appbar, Icon, MD3Theme, Text, useTheme } from "react-native-paper";
import { ReactNode } from "react";
import { ScaledSheet } from "react-native-size-matters";

export function Header(props: BottomTabHeaderProps) {
  const theme = useTheme();
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: theme.colors.backdrop,
          borderBottomColor: theme.colors.elevation.level3,
          borderBottomWidth: 1,
          shadowColor: theme.colors.elevation.level3,
        }}
      >
        {router.canGoBack() && (
          <Appbar.BackAction
            onPress={() => {
              router.back();
            }}
            {...props.navigation}
          />
        )}
        <Appbar.Content title={props.options.title} />
        <Appbar.Action
          icon="cog"
          onPress={() => {
            router.navigate("menu");
          }}
        />
      </Appbar.Header>
    </View>
  );
}

export default function Layout() {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        header: Header,
        tabBarStyle: style.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarLabel(props) {
            return (
              <View>
                <Text
                  style={{
                    marginBottom: 12,
                  }}
                >
                  Inicio
                </Text>
              </View>
            );
          },
          tabBarIcon: ({ focused, size }) => (
            <Icon
              source={focused ? "home" : "home-outline"}
              size={size}
              theme={theme}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const style = ScaledSheet.create({
  tabBar: {
    minHeight: "8%",
  },
  barLabel: {},
  barLabelActive: {
    backgroundColor: "blue",
    borderBottomWidth: 3,
  }
});
