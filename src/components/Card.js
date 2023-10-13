import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    );
};

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
        padding: 20,
        margin: 10,
    },
});

export default Card;
