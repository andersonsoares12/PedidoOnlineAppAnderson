import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/create-user', {
                name,
                email,
                password,
            });
            // Implemente o tratamento de resposta e autenticação, se necessário.
            navigation.navigate('Login');
        } catch (error) {
            // Trate erros de cadastro.
            console.error(error);
        }
    };

    return (
        <View>
            <Text>Cadastro</Text>
            <TextInput placeholder="Nome" onChangeText={setName} />
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Senha" onChangeText={setPassword} secureTextEntry />
            <Button title="Cadastrar" onPress={handleSignup} />
        </View>
    );
};

export default SignupScreen;
