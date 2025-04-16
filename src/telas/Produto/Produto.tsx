import React from "react";
import {View} from "react-native";
import { Card } from "react-native-paper";

import Texto from '../../componentes/Texto';

export default function Produto({prod:{id,nome,imagem,descricao}}:any){
    return <View>
                <Card mode='elevated'>
                    <Card.Content>
                        <Texto>{nome}</Texto>
                    </Card.Content>
                    <Card.Cover source={imagem}/>
                </Card>
           </View>
}