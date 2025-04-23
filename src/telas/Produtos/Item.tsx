import React from "react";
import { Card } from "react-native-paper";
import { View } from "react-native";

import Texto from '../../componentes/Texto';
import styles from './estilosProdutos'

export default function Item({prod:{id,nome,imagem,descricao}}:any){
    return <View>
            <Card mode='elevated' style={styles.card}> 
                <Card.Content>
                    <Texto style={styles.nomeProduto}>{nome}</Texto>
                </Card.Content>
                <Card.Cover source={imagem} style={styles.imagem}/>
            </Card>
           </View>
}