import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useAppState } from './AppState';

function ProductDetailScreen({ route, navigation }) {
    const { product } = route.params; // Obtém o produto da rota
    const { cart, setCart } = useAppState();



    const addToCart = () => {
        // Adicione o produto ao carrinho
        setCart([...cart, product]);
    };

    return (
        <View>
            <Image source={{ uri: product.imageUrl }} style={{ width: 200, height: 200 }} />
            <Text>Nome: {product.name}</Text>
            <Text>Categoria: {product.category}</Text>
            <Text>Descrição: {product.description}</Text>
            <Text>Preço por Unidade: ${product.price}</Text>
            <Button title="Adicionar ao Carrinho" onPress={addToCart} />
        </View>
    );
}

export default ProductDetailScreen;
