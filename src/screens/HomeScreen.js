import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import axios from 'axios';

function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [numColumns, setNumColumns] = useState(2); // Número de colunas inicial

    const flatListRef = useRef(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await axios.get('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/read-products');
                const productsData = response.data;
                setProducts(productsData);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }

        loadProducts();
    }, []);

    const changeNumColumns = (newNumColumns) => {
        // Gere uma chave única com base no número de colunas para forçar uma re-renderização
        const key = numColumns + newNumColumns;

        setNumColumns(newNumColumns);
        flatListRef.current.scrollToIndex({ animated: true, index: 0, viewOffset: 0 });
    };

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>{item.price} / {item.unit}</Text>
        </View>
    );

    return (
        <View>
            <Text>Produtos</Text>

            <FlatList
                ref={flatListRef}
                data={products}
                keyExtractor={(item) => item._id.toString()}
                numColumns={numColumns}
                renderItem={renderCard}
            />
        </View>
    );
}



const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        elevation: 3,
        padding: 10,
        margin: 8,
        flex: 1,
    },
    image: {
        width: '100%', // Isso fará com que a imagem ocupe toda a largura horizontal do card.
        height: 100, // Altura desejada da imagem.
    },
});

export default HomeScreen;
