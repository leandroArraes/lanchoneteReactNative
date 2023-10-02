import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProdutoView from '../components/ProdutoView';


const produto = {
    "id": 1,
    "nome": "Hambúrguer",
    "descricao": "Pão, bife de hambúrguer 90g, salada e batata.",
    "preco": 8.5,
    "categoria_id": 1
  }

 function Home(){
    return(
        <View>
            <Text>Produtos</Text>
            <ProdutoView nome={produto['nome']}  descricao={produto['descricao']} preco={produto['preco']}></ProdutoView>
        </View>
      
      );
    }

export default Home