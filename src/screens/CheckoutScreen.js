import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useAppState } from './AppState';

function CheckoutScreen({ navigation }) {
    const { cart, setCart } = useAppState();

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    };

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.unit}</Text>
            <Text>${item.price}</Text>
        </View>
    );

    return (
        <View>
            <Text>Itens no Carrinho:</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
            />
            <Text>Valor Total: ${calculateTotal()}</Text>
            <Button title="Concluir a Compra" onPress={() => navigation.navigate('FinalizePurchase')} />
        </View>
    );
}

export default CheckoutScreen;
