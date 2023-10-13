import axios from 'axios';

const baseURL = 'https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions';

// Função para fazer uma solicitação de login


const login = async (email, password) => {
    try {
        const response = await axios.post('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/login-user', {
            email,
            password,
        });
        return response.data; // O resultado do login será retornado (geralmente um token de autenticação).
    } catch (error) {
        console.error('Erro no login:', error);
        throw error; // Tratar o erro conforme necessário.
    }
};



// Função para fazer uma solicitação de cadastro
const register = async (name, email, password) => {
    try {
        const response = await axios.post('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/create-user', {
            name,
            email,
            password,
        });
        return response.data; // O resultado do cadastro, se aplicável.
    } catch (error) {
        console.error('Erro no cadastro:', error);
        throw error; // Tratar o erro conforme necessário.
    }
};

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/read-products');
        // Adicione uma propriedade "id" a cada item da lista de produtos
        const productsWithIds = response.data.map((product, index) => ({
            ...product,
            id: index + 1, // Você pode usar um valor único como id
        }));
        return productsWithIds; // A lista de produtos da API com "id" definido.
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error; // Tratar o erro conforme necessário.
    }
};


// Função para enviar um pedido
const placeOrder = async (orderData) => {
    try {
        const response = await axios.post('https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions/create-order', orderData);
        return response.data; // O resultado do pedido, se aplicável.
    } catch (error) {
        console.error('Erro ao enviar pedido:', error);
        throw error; // Tratar o erro conforme necessário.
    }
};
