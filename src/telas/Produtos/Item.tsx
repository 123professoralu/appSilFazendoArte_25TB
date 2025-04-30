import React from "react";
import { Card } from "react-native-paper";
import { View, TouchableOpacity, Modal, Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Texto from '../../componentes/Texto';
import styles from './estilosProdutos';

export default function Item({prod:{id,nome,imagem,descricao}}:any){
    return <View>
                <Card mode='elevated' style={styles.card}> 
                    <Card.Content>
                        <Texto style={styles.nomeProduto}>{nome}</Texto>
                    </Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem}/>
                    <Card.Actions>
                        <TouchableOpacity style={styles.botao}>
                            <Texto style={styles.textoBotao}>
                                <Ionicons name="list" size={12} color="white"/> Detalhes
                            </Texto>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>

                <Modal animationType="fade" transparent={true} visible={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Texto style={styles.nomeProduto}>{nome}</Texto>
                            <Texto style={styles.descProduto}>{descricao}</Texto>
                            <Image source={imagem} style={styles.imagemModal} resizeMode="contain"/>
                        </View>
                    </View>
                </Modal>
           </View>
}