import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAudioPlayer } from "expo-audio";

import Sobre from "./src/telas/Sobre";
import Texto from "./src/componentes/Texto";

/*Menu Produtos*/
import Produtos from './src/telas/Produto'
import ListaProdutos from './src/mocks/listaProdutos'

/*Menu Perfil*/
import Perfil from './src/telas/Perfil/'

function MenuProdutos(){
  return <Produtos {...ListaProdutos}/>
}

//Áudio
function MenuAudio(){
  const audioSource = require('./assets/acdc_highway_to_hell.mp3');
  const player = useAudioPlayer(audioSource);

  return <TouchableOpacity onPress={()=>player.play()}>
            <Texto>🎧On/Off</Texto>
        </TouchableOpacity>
}

//Configuração do Menu
const Tab = createBottomTabNavigator();

function Menu(){
  return <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size})=>{
                let iconName: any;

                if(route.name==="Sobre"){
                  iconName = focused
                  ? 'paw'
                  : 'paw-outline';
                } else if(route.name ==="Produtos"){
                  iconName = focused
                  ? 'list'
                  : 'list-outline';
                } else if(route.name ==="Lista de Desejos"){
                  iconName = focused
                  ? 'heart'
                  : 'heart-outline';
                } else if(route.name ==="Perfil"){
                  iconName = focused
                  ? 'person'
                  : 'person-outline';
                }
                return <Ionicons name={iconName} color={color} size={size}/>
              },
              tabBarActiveTintColor: 'purple',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}>
            <Tab.Screen name="Sobre" component={Sobre}/>
            <Tab.Screen name="Produtos" component={MenuProdutos}/>
            <Tab.Screen name="Lista de Desejos" component={Sobre}/>
            <Tab.Screen name="Perfil" component={Perfil}/>
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
            <MenuAudio/>
        </NavigationContainer>
}
