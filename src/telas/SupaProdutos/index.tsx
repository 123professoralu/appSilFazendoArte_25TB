import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Alert, StatusBar} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { supabase } from '../../../utils/supabase';

import Texto from '../../componentes/Texto'
import styles from './estilosListaProdutos'

export default function Index() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [ativo, setAtivo] = useState(true);
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  async function carregarProdutos() {
    const { data, error } = await supabase
      .from('cadProdutos')
      .select('*')
      .order('id', { ascending: true });

    if (error) Alert.alert('Erro ao carregar', error.message);
    else setProdutos(data);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function salvarProduto() {
    if (!nome || !descricao || !imagem || !preco) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const dados = {
      nome,
      ativo,
      descricao,
      imagem,
      valorUnit: parseFloat(preco),
    };

    let response;
    if (editandoId) {
      response = await supabase.from('cadProdutos').update(dados).eq('id', editandoId);
    } else {
      response = await supabase.from('cadProdutos').insert([dados]);
    }

    if (response.error) {
      Alert.alert('Erro', response.error.message);
    } else {
      limparFormulario();
      carregarProdutos();
    }
  }

  function editar(produto) {
    setEditandoId(produto.id);
    setNome(produto.nome);
    setAtivo(produto.ativo);
    setDescricao(produto.descricao);
    setImagem(produto.imagem);
    setPreco(produto.valorUnit.toString());
  }

  async function excluir(id) {
    const { error } = await supabase.from('cadProdutos').delete().eq('id', id);
    if (error) Alert.alert('Erro ao excluir', error.message);
    else carregarProdutos();
  }

  function limparFormulario() {
    setNome('');
    setDescricao('');
    setAtivo(true);
    setImagem('');
    setPreco('');
    setEditandoId(null);
  }

  return (
    <View style={styles.container}>
       <StatusBar barStyle='dark-content'/>
      <Texto style={styles.titulo}>Formulário de Produtos</Texto>

      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Descrição" style={styles.input} value={descricao} onChangeText={setDescricao} />
      <Texto style={styles.label}>Produto Ativo?</Texto>
      <Picker
        selectedValue={ativo}
        style={styles.picker}
        mode= "dropdown"
        onValueChange={(value) => setAtivo(value)}>
        <Picker.Item label="Sim" value={true} />
        <Picker.Item label="Não" value={false} />
      </Picker>
      <TextInput placeholder="URL da imagem" style={styles.input} value={imagem} onChangeText={setImagem} />
      <TextInput placeholder="Preço" style={styles.input} keyboardType="numeric" value={preco} onChangeText={setPreco} />

      <TouchableOpacity style={styles.botao} onPress={salvarProduto}>
        <Texto style={styles.textoBotao}>{editandoId ? 'Atualizar' : 'Salvar'}</Texto>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Texto style={styles.nome}>{item.ativo? 'ATIVO' : 'INATIVO'}</Texto>
            <Texto style={styles.nome}>{item.nome}</Texto>
            <Texto style={styles.categoria}>{item.descricao}</Texto>
            <Texto style={styles.preco}>R$ {item.valorUnit.toFixed(2)}</Texto>
            <View style={styles.acoes}>
              <TouchableOpacity onPress={() => editar(item)}>
                <Texto style={styles.link}>Editar</Texto>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluir(item.id)}>
                <Texto style={styles.linkExcluir}>Excluir</Texto>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

/* 
import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, StatusBar} from 'react-native';
import { supabase } from '../../../utils/supabase';
import { Card } from 'react-native-paper';

import Texto from '../../componentes/Texto'
import styles from './estilosListaProdutos'

export default function Index() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: todos, error } = await supabase.from('cadProdutos')
                                                     .select()
                                                     .eq('ativo', true)
                                                     .order('nome', {ascending: true});

        if (error) {
           console.error('Error fetching table:', error.message);
         return;
        }

        if (todos && todos.length > 0) {
          setTodos(todos);
        }
      } catch (error) {
        console.error('Error fetching table:', error.message);
      }
    };

    getTodos();
  }, []);

  //Monta o layout de cada item da lista
  const cadaItem = ({item})=> {
      return <View style={styles.cardContainer}>
                  <Card mode='contained' style={styles.card} > 
                  <Card.Content>
                      <Card.Cover source={{uri:  item.imagem}} style={styles.imagem}/>
                      <Texto style={styles.nomeProduto}>{item.nome}</Texto>
                  </Card.Content>
                  </Card>
              </View>
  }

  console.log(todos);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
        <StatusBar barStyle='dark-content'/>
      <Text>Lista de Produtos </Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => cadaItem({item}) }
        numColumns={2}
      />
    </View>
  );
};

 */