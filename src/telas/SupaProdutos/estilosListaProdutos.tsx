import { StyleSheet } from "react-native";

const estilosProdutos = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 50, flex: 1 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  label: { marginBottom: 5, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
  },
  botao: {
    backgroundColor: 'purple',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: { color: 'white', fontWeight: 'bold' },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  nome: { fontWeight: 'bold' },
  categoria: { color: 'gray' },
  preco: { color: 'green' },
  acoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  link: { color: 'blue' },
  linkExcluir: { color: 'red' },
});

export default estilosProdutos;

/* import React from "react";
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

export default estilosProdutos; */