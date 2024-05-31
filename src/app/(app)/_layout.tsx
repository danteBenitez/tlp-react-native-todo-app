import { Tabs, router, useRouter } from "expo-router";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import {
  Appbar,
  Icon,
  MD3Theme,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import TaskContextProvider from "@/components/tasks/provider";

export function Header(props: BottomTabHeaderProps & { theme: MD3Theme }) {
  const theme = props.theme;
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: theme.colors.surface,
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
        <Appbar.Content
          title={props.options.title ?? ""}
          titleStyle={{ fontWeight: 800 }}
        />
        <Appbar.Action
          icon="cog"
          onPress={() => {
            router.navigate("/settings");
          }}
        />
      </Appbar.Header>
    </View>
  );
}

export default function Layout() {
  const theme = useTheme();
  return (
    <TaskContextProvider>
      <Tabs
        sceneContainerStyle={{
          width: "100%",
        }}
        screenOptions={{
          header: (props) => <Header {...props} theme={theme} />,
          tabBarStyle: style.tabBar,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
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
        <Tabs.Screen
          name="add-todo"
          options={{
            title: "",
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ size }) => (
                <Surface
                  elevation={4}
                  style={{
                    backgroundColor: theme.colors.primary,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%",
                    height: "120%",
                    borderRadius: 100,
                    zIndex: 100,
                    marginBottom: 5,
                  }}
                >
                  <Icon
                    source={"plus"}
                    color={theme.colors.onPrimary}
                    size={size}
                    theme={theme}
                  />
                </Surface>
            ),
          }}
        />
        <Tabs.Screen
          name="todo-list"
          options={{
            title: "Mis tareas",
            tabBarLabel(props) {
              return (
                <View>
                  <Text
                    style={{
                      marginBottom: 12,
                    }}
                  >
                    {props.children}
                  </Text>
                </View>
              );
            },
            tabBarIcon: ({ focused, size }) => (
              <Icon
                source={focused ? "clipboard-list" : "clipboard-list-outline"}
                size={size}
                theme={theme}
              />
            ),
          }}
        />
        <Tabs.Screen name="tasks" options={{
          href: null
        }} />
      </Tabs>
    </TaskContextProvider>
  );
}

const style = ScaledSheet.create({
  tabBar: {
    minHeight: "8%",
    zIndex: 1,
  },
  barLabel: {},
  barLabelActive: {
    backgroundColor: "blue",
    borderBottomWidth: 3,
  },
});
