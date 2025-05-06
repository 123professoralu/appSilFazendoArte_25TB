import React from "react";
import {StatusBar, StyleSheet, ScrollView, Image} from "react-native";
import { useVideoPlayer, VideoView } from 'expo-video';

import Texto from '../componentes/Texto';

const videoSource ='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function Sobre(){

    const player = useVideoPlayer(videoSource, player => {
        player.loop = false;
        //player.play();
      });

    return <ScrollView style={estilos.sobre}>
        <StatusBar />
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto style={estilos.texto_sobre}>
            A Sil Fazendo Arte é uma empresa que começou durante a pandemia de 2020 para distração e relaxamento de sua proprietária, Silvia, porém o dom dela não passou despercebido e começou a chamar atenção dos familiares, amigos, amigos dos amigos, familiares dos amigos e por aí seguiu!
            {'\n'}{'\n'}
            Hoje ela tem clientes de várias cidades, estados e até de outro país! Todos ficam encantados com as artes que ela faz!!!
            Os produtos são feitos com muito carinho e dedicação e os atendimentos são feitos apenas por WhatsApp ou Instagram.
            {'\n'}{'\n'}
            Veja como funciona a produção: O auxiliar Tony, escolhe criteriosamente qual fita deve ser utilizada.
        </Texto>
        <Image source={require('../../assets/escolha_fitas.jpeg')} style={estilos.img_sobre} />
        <Texto style={estilos.texto_sobre}>Depois disso, ela é aplicada ao produto que foi encomendado.</Texto>
        <VideoView style={estilos.video} player={player} allowsFullscreen allowsPictureInPicture />
    </ScrollView>
}

const estilos = StyleSheet.create({
    sobre: {
        backgroundColor: "purple",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    texto_sobre: {
        color: "white",
        lineHeight: 25,
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    img_sobre: {
        height: 350,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
        width: 200,
    },
    video: {
        width: 350,
        height: 275,
        alignSelf: "center",
      },
})
