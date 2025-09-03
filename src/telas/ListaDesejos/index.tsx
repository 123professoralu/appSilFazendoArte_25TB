import React, {useState, useEffect} from "react"
import { FlatList, View, TouchableOpacity } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import Texto from "../../componentes/Texto"
import styles from "./estilosListaDesejos"
import CadaItem from "./listaItem"

export default function Index(){

    //Captura os dados do AsyncStorage
    const [lista, setLista] = useState([])

    const carregaListaDesejos = async() => {
        const listaSalva = await AsyncStorage.getItem('ListaDesejos')
        setLista(JSON.parse(listaSalva))
        console.log(listaSalva)
    }

    useEffect(()=>{carregaListaDesejos()},[])

    return <View>
                <Texto style={styles.titulo}>Lista de Desejos</Texto>
                <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua Lista de Desejos</Texto>

                <FlatList 
                    data={lista}
                    renderItem={({item})=><CadaItem {...item} />}
                    keyExtractor={({id})=> id}
                />

                <TouchableOpacity style={styles.botaoApagar} onPress={async()=>{await AsyncStorage.clear()}}>
                    <Texto>Limpar Lista de Desejos</Texto>
                </TouchableOpacity>
            </View>
}