import React from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const CreateOrderScreen = ({ navigation }) => {
    const createOrder = async () => {
        const orderData = {
            customer: {
                _id: '123445',
                name: 'Claudio',
            },
            items: [
                {
                    _id: '64da7728fb8b9b284f6e9c91',
                    quantity: 1,
                    total: 1.99,
                    imageUrl: 'https://villalvafrutas.com.br/wp-content/uploads/2017/08/155.6.546.444994.jpg',
                    name: 'Laranja',
                    price: 1.99,
                    unit: 'KG',
                },
                {
                    _id: '64da7772fb8b9b284f6e9c93',
                    quantity: 1,
                    total: 4,
                    imageUrl: 'https://kinghorse.com.br/wp-content/uploads/2018/11/plantacao-de-morango.jpg',
                    name: 'Morango',
                    price: 4,
                    unit: 'KG',
                },
                {
                    _id: '64da7a94fb8b9b284f6e9c97',
                    quantity: 1,
                    total: 7.99,
                    imageUrl: 'https://www.soflor.com.br/wp-content/uploads/2014/08/pimentao-vermelho-50-sementes-4377-e1496690749652.jpg',
                    name: 'Pimentão vermelho',
                    price: 7.99,
                    unit: 'KG',
                },
                {
                    _id: '64da78cffb8b9b284f6e9c95',
                    quantity: 1,
                    total: 6.89,
                    imageUrl: 'https://static.itdg.com.br/images/auto-auto/5391eab33af911d9bad8e95a8b3a57f1/shutterstock-290834552.jpg',
                    name: 'Maça',
                    price: 6.89,
                    unit: 'KG',
                },
            ],
        };

        try {
            const response = await axios.post('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/create-order', orderData);
            // Implemente o tratamento de resposta, se necessário.
            navigation.navigate('Products');
        } catch (error) {
            // Trate erros de criação de pedido.
            console.error(error);
        }
    };

    return (
        <View>
            <Text>Criar Pedido</Text>
            <Button title="Criar Pedido" onPress={createOrder} />
        </View>
    );
};

export default CreateOrderScreen;
