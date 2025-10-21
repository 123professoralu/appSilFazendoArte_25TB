import React from "react";
import { StyleSheet } from "react-native";

const estilosProdutos = StyleSheet.create({
    listaContainer: {
        flex: 1,
        paddingTop: "10%",
        backgroundColor: "#CCCCFF",
    },
    cardContainer: {
        width: '50%',
    },
    imagem: {
        width: "90%",
        maxHeight: "90%",
        alignSelf: "center",
    },
    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "purple",
        marginBottom: 10,
    },
    nomeProduto: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        textAlign: 'center'
    },
    titulo: {
        paddingTop: '5%',
        paddingBottom: 10,
        fontSize: 30,
        color: "purple",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
    },
    textoLista: {
        fontSize: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
});

export default estilosProdutos;