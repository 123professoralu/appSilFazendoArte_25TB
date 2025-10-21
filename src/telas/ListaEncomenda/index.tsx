import React, {useEffect, useState} from "react"
import { View, FlatList } from "react-native"
import axios from 'axios'

import Texto from "../../componentes/Texto"

export default function Index(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get('http://localhost:3000/encomendas_app')
                console.log(response)
                setData(response.data)
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    //Monta o layout de cada item da lista
    const cadaItem = ({item})=>{
            return <View>
                    <Texto>{item.nome} | {item.produto} | {item.qtde}</Texto>
            </View>
    }

    return <View>
            <FlatList
                data={data}
                renderItem={({item})=>cadaItem({item})}
                keyExtractor={({id})=>String(id)}
            />
    </View>
}