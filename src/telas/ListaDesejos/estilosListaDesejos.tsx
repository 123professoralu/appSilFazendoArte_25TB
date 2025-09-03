import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
    },
    cardContainer: {
        width: '50%',
    },
    imagem: {
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'purple',
        marginBottom: 10,
    },
    nomeProduto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    titulo: {
        paddingTop: '10%',
        paddingBottom: 10,
        fontSize: 30,
        color: 'purple',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    textoLista: {
        fontSize: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
    botaoApagar: {
        padding: 10,
        width: '55%',
        backgroundColor: "purple",
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
    }
})

export default styles;