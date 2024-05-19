import { StyleSheet, View } from "react-native";
import StartGameScreen from "../screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
