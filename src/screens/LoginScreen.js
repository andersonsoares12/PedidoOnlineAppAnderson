import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {


    const [loggedIn, setLoggedIn] = useState(false);


    const handleLogin = () => {

    };

    return (
        <View style={styles.container}>
            {loggedIn ? (
                <Text>Você está logado!</Text>
            ) : (
                <View style={styles.loginContainer}>
                    <Text style={styles.headerText}>Faça o login</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
                    <Button title="Entrar" onPress={handleLogin} />
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.registerText}>Não tem uma conta? Cadastre-se aqui.</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 120, // Espaço no topo de 120 pixels
    },
    loginContainer: {
        width: '80%',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    registerText: {
        color: 'blue',
        marginTop: 10,
    },
});

export default LoginScreen;