import React, { useState } from "react";
import * as FONT from 'expo-font';
import AppLoading from 'expo-app-loading'; // component for preloading all content in async mode

import { TodoState } from "./src/context/todo/TodoState"
import { ScreenState } from "./src/context/screen/ScreenState"
import { MainLayout } from "./src/MainLayout"


const loadApp = async () => {
  await FONT.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}


export default function App() {

  const [appReady, setAppReady] = useState(false)

  if (!appReady) { 
    return (
      <AppLoading 
        startAsync={loadApp} 
        onError={err => console.log(err)} 
        onFinish={setAppReady(true)} 
      />
    )
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}

