import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

function ProdutoService() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('http://10.0.0.2:3000/Produtos')
        .then(response => {
          setProdutos(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
          setLoading(false);
        });
    }, []);
  
    return (
      <View>
        <Text>Lista de Produtos:</Text>
        {loading ? (
          <Text>Carregando...</Text>
        ) : (
          <ul>
            {produtos.map(produto => (
              <li key={produto.id}>
                Nome: {produto.nome}, Descrição: {produto.descricao}, Preço: R$ {produto.preco.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </View>
    );
  };
  

export default ProdutoService;
