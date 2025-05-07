import React, {useState} from "react";
import { Card } from "react-native-paper";
import { View, TouchableOpacity, Modal, Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PagerView from "react-native-pager-view";

import Texto from '../../componentes/Texto';
import styles from './estilosProdutos'

export default function Produto({prod:{id,nome,imagem,descricao,slider}}:any){

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
                        {/* <Image source={imagem} resizeMode="contain" style={styles.imagemModal}/> */}
                        {/* Slider de imagens do Produto*/}
                        <PagerView initialPage={0} style={styles.pagerView}>
                            {/*Monta o laço de repetição para as imagens do Slider*/
                            slider.map((img:any, index:any)=>(
                                <View key={index} style={styles.page}>
                                    <Image source={img} resizeMode='contain' style={styles.imagemSlider}/>
                                </View>
                            ))}
                        </PagerView>
                        <TouchableOpacity onPress={()=>acaoAbreFecha(false)} style={styles.botaoModal}>
                            <Ionicons name="close" size={30} color="purple"/>
                        </TouchableOpacity>                    
                    </View>
                </View>
            </Modal>
        </View>
}