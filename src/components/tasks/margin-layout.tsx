import { View } from "react-native";

/** Simple layout that wraps a View with some custom margin */
export default function MarginLayout(props: { children: React.ReactNode }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        marginTop: 20,
      }}
    >
      {props.children}
    </View>
  );
}
