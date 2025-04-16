import React from "react";
import { View, FlatList } from "react-native";

import CadaProduto from './Produto';
import styles from './estilosProdutos'

export default function Index({itens}:any){
    return <View style={styles.corFundo}>
                <FlatList
                    data={itens.lista}
                    renderItem={({item})=> <CadaProduto prod={item}/>}
                    keyExtractor={itens.lista.id}/>
            </View>
}