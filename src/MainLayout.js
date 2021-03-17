import React, { useState, useContext } from 'react'
import { ImageBackground, StyleSheet, View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavBar } from "./components/NavBar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/ScreenState";
import { THEME } from './styles/theme'


export const MainLayout = () => {

  const { todoId } = useContext(ScreenContext)

  return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={styles.image}>
      <StatusBar style="light" />
      <NavBar />
      <View style={styles.container}>
        { todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: THEME.MARGIN_HORIZONTAL,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
