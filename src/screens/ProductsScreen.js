import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import axios from 'axios';

const ProductsScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/read-products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleCreateOrder = () => {

        navigation.navigate('CreateOrder');
    };

    return (
        <View>
            <Text>Produtos</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
                        <Text>{item.name}</Text>
                        <Text>{item.price} / {item.unit}</Text>
                    </View>
                )}
            />
            <Button title="Criar Pedido" onPress={handleCreateOrder} />
        </View>
    );
};

export default ProductsScreen;
