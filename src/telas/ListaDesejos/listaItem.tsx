import { Card } from "react-native-paper";
import { View } from "react-native";

import Texto from "../../componentes/Texto";
import styles from "./estilosListaDesejos";

export default function CadaItem({id,nome,imagem,descricao}){
    return <View style={styles.cardContainer}>
                <Card mode="elevated" style={styles.card}>
                    <Card.Content>
                        <Card.Cover source={imagem} style={styles.imagem} />
                        <Texto style={styles.nomeProduto}>{nome}</Texto>
                    </Card.Content>
                </Card>
        </View>
}