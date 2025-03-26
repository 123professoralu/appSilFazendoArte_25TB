import React from "react";
import { View } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import Sobre from "./src/telas/Sobre";

export default function App() {

  //Carregamento da Fonte para o projeto
  const [fonteCarregada] = useFonts({"FontePadrao" : Montserrat_400Regular});

  if(!fonteCarregada){
    return <View/>;
  }

  return <Sobre />
}
