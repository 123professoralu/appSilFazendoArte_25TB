import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import axios from 'axios';

interface CatBreed {
  id: string;
  name: string;
  reference_image_id?: string;
  imageUrl?: string; // para armazenar a URL final
}

export default function CatList() {
  const [cats, setCats] = useState<CatBreed[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBreeds() {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      const breeds: CatBreed[] = response.data;

      const breedsWithImage = await Promise.all(
        breeds.map(async (breed) => {
          if (breed.reference_image_id) {
            try {
              const imgResp = await axios.get(
                `https://api.thecatapi.com/v1/images/${breed.reference_image_id}`
              );
              return { ...breed, imageUrl: imgResp.data.url };
            } catch (err) {
              console.warn(`Falha ao buscar imagem para ${breed.id}`, err);
              return { ...breed };
            }
          } else {
            return { ...breed };
          }
        })
      );

      setCats(breedsWithImage.filter(b => b.imageUrl)); // opcional: só mostrar os que têm imagem
    } catch (error) {
      console.error('Erro buscando raças:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBreeds();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="purple" />
        <Text>Carregando raças...</Text>
      </View>
    );
  }

  return <View style={styles.container}>
    <StatusBar barStyle='dark-content'/>
    <FlatList
      data={cats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {item.imageUrl ? (
            <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode='center'/>
          ) : (
            <Text style={styles.noImageText}>Sem imagem disponível</Text>
          )}
          <Text style={styles.name}>{item.name}</Text>
        </View>
      )}
      numColumns={2}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    backgroundColor:'#E5E6FA'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  name: {
    fontSize: 18,
    marginTop: 10,
    color: '#333',
  },
  image: {
    width: 165,
    height: 200,
    borderRadius: 8,
  },
  noImageText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
});