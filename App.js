import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello Android!</Text>

      <StatusBar style="auto" />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  hello: {
    fontSize: 20,
    color: "white",
  },
});
