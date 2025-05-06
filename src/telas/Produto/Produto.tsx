import React, {useState} from "react";
import { Card } from "react-native-paper";
import { View, TouchableOpacity, Modal, Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Texto from '../../componentes/Texto';
import styles from './estilosProdutos'

export default function Produto({prod:{id,nome,imagem,descricao}}:any){

    const [statusModal, acaoAbreFecha] = useState(false);

    return <View>
            <Card mode='elevated' style={styles.card}> 
                <Card.Content>
                    <Texto style={styles.nomeProduto}>{nome}</Texto>
                </Card.Content>
                <Card.Cover source={imagem} style={styles.imagem}/>
                <Card.Actions>
                    <TouchableOpacity style={styles.botao} onPress={()=> acaoAbreFecha(true)}>
                        <Texto style={styles.textoBotao}>
                            <Ionicons name="list" size={12} color="white"/> Detalhes
                        </Texto>
                    </TouchableOpacity>
                </Card.Actions>
            </Card>

            {/* Modal dos Produtos */}
            <Modal animationType="slide" transparent={true} visible={statusModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Texto style={styles.nomeProduto}>{nome}</Texto>
                        <Texto style={styles.descProduto}>{descricao}</Texto>
                        <Image source={imagem} resizeMode="contain" style={styles.imagemModal}/>
                        <TouchableOpacity onPress={()=>acaoAbreFecha(false)} style={styles.botaoModal}>
                            <Ionicons name="close" size={30} color="purple"/>
                        </TouchableOpacity>                    
                    </View>
                </View>
            </Modal>
        </View>
}