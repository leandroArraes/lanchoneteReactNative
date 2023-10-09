import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/View/Home';
import ProdutoService from './src/classes/ProdutoService';
import Cview from './src/View/Cview';
export default function App() {
  return (
    <View style={styles.container}>

      {/* <Home></Home> */}
       {/* <ProdutoService></ProdutoService> */}
       <Cview/>
  
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
