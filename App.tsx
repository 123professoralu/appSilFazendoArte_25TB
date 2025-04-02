import React from "react";
import { View } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Sobre from "./src/telas/Sobre";

//Configuração do Menu
const Tab = createBottomTabNavigator();

function Menu(){
  return <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size})=>{
                let iconName;

                if(route.name==="Sobre"){
                  iconName = focused
                  ? 'paw'
                  : 'paw-outline';
                }
                return <Ionicons name={iconName} color={color} size={size}/>
              },
              tabBarActiveTintColor: 'purple',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}>
            <Tab.Screen name="Sobre" component={Sobre}/>
            <Tab.Screen name="Produtos" component={Sobre}/>
            <Tab.Screen name="Lista de Desejos" component={Sobre}/>
            <Tab.Screen name="Perfil" component={Sobre}/>
        </Tab.Navigator>
}

export default function App() {

  //Carregamento da Fonte para o projeto
  const [fonteCarregada] = useFonts({"FontePadrao" : Montserrat_400Regular});

  if(!fonteCarregada){
    return <View/>;
  }

  return <NavigationContainer>
            <Menu />
        </NavigationContainer>
}
