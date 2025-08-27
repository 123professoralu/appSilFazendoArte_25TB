import React, {useState, useEffect} from "react";
import {Card} from 'react-native-paper';
import { View, TextInput, TouchableOpacity, Alert} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../componentes/Texto'
import styles from './estilosPerfil'

export default function Index(){
    
    const[facing, setFacing] = useState<CameraType>('back');
    const[permission, requestPermission] = useCameraPermissions();

    //Informações do Perfil
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    //Carrega os dados do perfil salvo
    useEffect(()=>{
        async function carregarPerfil(){
            const perfilSalvo = await AsyncStorage.getItem('Perfil')
            if(perfilSalvo) {
                const perfil = JSON.parse(perfilSalvo)
                setNome(perfil.nome)
                setEmail(perfil.email)
                setWhatsapp(perfil.whatsapp)
            }
        }
        carregarPerfil()
    }, [])
    
    //Se as permissões da câmera ainda estiverem carregando, exibe uma view vazia
    if(!permission) {
        return <View/>;
    }

    //Solicita permissões da câmera
    if(!permission.granted){
        return <View style={styles.container}>
                    <Texto style={styles.message}>Precisamos da sua autorização para exibir a câmera</Texto>
                    <TouchableOpacity onPress={requestPermission}>
                        <Texto>Permitir</Texto>
                    </TouchableOpacity>
                </View>
    }

    //Faz a troca da câmera
    function toggleCameraFacing(){
        setFacing(current=>(current === 'back' ? 'front' : 'back'));
    }

    //Salvar informações do perfil
    async function salvarPerfil(){
        const perfil = {nome,email,whatsapp};
        await AsyncStorage.setItem('Perfil', JSON.stringify(perfil));
        Alert.alert('Perfil salvo com sucesso.');
        console.log(perfil);
    }

    return <View style={styles.container}>
                <CameraView facing={facing} style={styles.camera}>
                    <View style={styles.cameraContainer}>
                        <TouchableOpacity style={styles.cameraVirarBotao} onPress={toggleCameraFacing}>
                            <Ionicons name="reload" size={30} color="purple"></Ionicons>
                        </TouchableOpacity>
                    </View>
                </CameraView>
                <Card mode='elevated' style={styles.cardContainer}>
                    <Card.Content>
                        <Texto style={styles.text}>Nome completo</Texto>
                        <TextInput style={styles.input} value={nome} onChangeText={setNome}/>
                        
                        <Texto style={styles.text}>E-Mail</Texto>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail}/>

                        <Texto style={styles.text}>WhatsApp</Texto>
                        <TextInput style={styles.input} keyboardType="numeric" value={whatsapp} onChangeText={setWhatsapp}/>
                    </Card.Content>
                    <Card.Actions>
                        <TouchableOpacity style={styles.botao} onPress={salvarPerfil}>
                            <Texto style={styles.textoBotao}>
                                <Ionicons name="save" size={20} color="white"/> Salvar Perfil
                            </Texto>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>
        </View>
}


