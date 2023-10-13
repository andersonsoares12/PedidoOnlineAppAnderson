import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppState } from './AppState';
import { placeOrder } from './api';

function FinalizePurchaseScreen({ navigation }) {
    const { cart, setCart } = useAppState();

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    };

    const handlePurchase = () => {
        // Envie o pedido para a API
        const customer = {
            _id: '12345', // ID do cliente (você pode pegar isso do estado do usuário)
            name: 'Nome do Cliente', // Nome do cliente (você pode pegar isso do estado do usuário)
        };

        // Crie um array de items com os produtos do carrinho
        const items = cart.map((item) => {
            return {
                _id: item._id,
                quantity: 1, // Quantidade (ajuste conforme necessário)
                total: item.price, // Total (ajuste conforme necessário)
                imageUrl: item.imageUrl,
                name: item.name,
                price: item.price,
                unit: item.unit,
            };
        });

        const order = {
            customer,
            items,
        };

        // Envie o pedido para a API
        placeOrder(order)
            .then((response) => {
                // Processar a resposta da API, como mostrar um recibo de compra
                // Limpar o carrinho
                setCart([]);
                // Navegar para a tela de confirmação
                navigation.navigate('PurchaseConfirmation');
            })
            .catch((error) => {
                console.error('Erro ao enviar pedido:', error);
                // Tratar erros, como exibir uma mensagem de erro ao usuário
            });
    };

    return (
        <View>
            <Text>Itens no Carrinho:</Text>
            {/* Exibir a lista de itens do carrinho aqui, se necessário */}
            <Text>Valor Total: ${calculateTotal()}</Text>
            <Button title="Concluir Compra" onPress={handlePurchase} />
        </View>
    );
}

export default FinalizePurchaseScreen;
