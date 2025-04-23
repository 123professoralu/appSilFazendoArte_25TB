import React from "react";
import { useFonts, 
         Montserrat_400Regular, 
         Montserrat_700Bold } 
         from "@expo-google-fonts/montserrat";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import SobreNos from "./src/telas/SobreNos";

//Menu PRODUTOS
import Produto from './src/telas/Produtos';
import MockProdutos from './src/mocks/listaProduto';

function MenuProdutos(){
  return <Produto {...MockProdutos} />
}

//Configuração do Menu
const Tab = createBottomTabNavigator();

function Menu() {
  return <Tab.Navigator
              screenOptions={({route})=>({
                  tabBarIcon: ({focused, color, size})=>{
                    let iconName: any;

                    if(route.name ==="Sobre Nós"){
                      iconName = focused
                      ? 'paw'
                      : 'paw-outline';
                    } else if(route.name ==="Produtos"){
                      iconName = focused
                      ? 'list'
                      : 'list-outline';
                    }else if(route.name ==="Lista de Desejos"){
                      iconName = focused
                      ? 'heart'
                      : 'heart-outline';
                    } else if(route.name ==="Perfil"){
                      iconName = focused
                      ? 'person'
                      : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                  },
                  tabBarActiveTintColor:'purple',
                  tabBarInactiveTintColor: 'gray',
                  headerShown: false,
              })}>
            <Tab.Screen name="Sobre Nós" component={SobreNos} />
            <Tab.Screen name="Produtos" component={MenuProdutos} />
            <Tab.Screen name="Lista de Desejos" component={SobreNos} />
            <Tab.Screen name="Perfil" component={SobreNos} />
        </Tab.Navigator>
}

export default function App() {

  //Configuração da fonte para o app
  const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular,
                                     "FonteBold": Montserrat_700Bold});

  //Verifica se a fonte foi carregada, se não, não exibe nada
  if(!fonteCarregada){
    return <View/>
  }

  return <NavigationContainer>
              <Menu />
        </NavigationContainer>
}