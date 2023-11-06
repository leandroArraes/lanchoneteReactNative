import React from 'react';
import {  StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import  { useState, useEffect } from 'react';
import {  Button, FlatList } from 'react-native';

const { width } = Dimensions.get('window');


function Cview (){
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

    useEffect(() => {
      fetchProducts(); 
    }, []);
    const imagen = "../../assets/produtos/h1.png"
    const renderItem = data => (
        <View  key={data.id} style={styles.cardContainer} >
          
          <View style={styles.cardWrapper}>
          <Image style={styles.card}  source={require(imagen)} />
            <View style={[styles.cornerLabel,{ backgroundColor: data.cornerLabelColor },]}>
              <Text style={styles.cornerLabelText}>{ data.descricao } </Text>
            
            </View>

          </View>
          
        </View>
      );
    
      return (


        <View   style={styles.container}>
          <Carousel
            pagination={PaginationLight}
            renderItem={renderItem}
            data={products}
            loop
            autoplay
          />
        
          
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:150
    },
    cardContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width,
    },
    cardWrapper: {
      borderRadius: 8,
      overflow: 'hidden',
    },
    card: {
      width: width * 0.9,
      height: width * 0.5,
    },
    cornerLabel: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderTopLeftRadius: 8,
    },
    cornerLabelText: {
      fontSize: 12,
      color: '#fff',
      fontWeight: '600',
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2,
      paddingBottom: 2,
    },
  });
export default Cview