import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import MainPage from "./src/screens/Main"
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { extendTheme } from "native-base"


import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
  Roboto
} from '@expo-google-fonts/roboto';
import { backgroundColor } from "styled-system";





export default function App() {
  // ambil fonts
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  // setup fonts
  const fontConfig = {
    Roboto : {
      500 : {
        normal : "Roboto_500Medium",
        italic : "Roboto_500Medium_Italic,"
      },
    }
  }

  // setup theme for navigation container
  const theme = extendTheme({
    fontConfig,
    fonts : {
      heading : "Roboto",
      body : "Roboto",
      mono : "Roboto"
    }
  })

  if(fontsLoaded == false){
    return <AppLoading/>
  } else {
    return (
    <NavigationContainer theme={theme}>
      <MainPage />
    </NavigationContainer>
    )
  }
}

