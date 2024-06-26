import { SetStateAction, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "../screens/StartGameScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/Colors";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// // import AppLoading from "expo-app-loading";

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [userNumber, setUserNumber] = useState<number | undefined>(undefined);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
  //   "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds: SetStateAction<number>) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(undefined);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
