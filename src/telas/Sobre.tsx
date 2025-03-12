import React from "react";
import {StatusBar, StyleSheet, View, Image} from "react-native";

import Texto from '../componentes/Texto';

export default function Sobre(){
    return <View style={estilos.sobre}>
        <StatusBar />
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto style={estilos.texto_sobre}>
            A Sil Fazendo Arte é uma empresa que começou durante a pandemia de 2020 para distração e relaxamento de sua proprietária, Silvia, porém o dom dela não passou despercebido e começou a chamar atenção dos familiares, amigos, amigos dos amigos, familiares dos amigos e por aí seguiu!
        </Texto>
        <Image source={require('../../assets/escolha_fitas.jpeg')} style={estilos.img_sobre} resizeMode="contain"/>
    </View>
}

const estilos = StyleSheet.create({
    sobre: {
        backgroundColor: "purple",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    texto_sobre: {
        color: "white",
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    img_sobre: {
        height: 500,
        alignSelf: "center",
    }
})
