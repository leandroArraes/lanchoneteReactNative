import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';


export default function App() {
  const [products, setProducts] = useState([]); 

  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/produtos'); 
      const data = await response.json();
      if (data) {
        console.log(data)
        setProducts(data);
      } else {
        console.error('Invalid JSON data format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Menu de Produtos</Text>
      <Button title="Listar Produtos" onPress={fetchProducts} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>Price: {item.preco}</Text>
          </View>
        )}
      />

      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
    marginBottom: 16,
    
  },
  productItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
});
