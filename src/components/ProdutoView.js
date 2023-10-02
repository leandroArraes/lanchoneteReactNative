import { StyleSheet, Text, View } from 'react-native';

function ProdutoView({nome,descricao,preco}){
    return(
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Descrição: {descricao}</Text>
            <Text>Preço: {preco} </Text>

            
        </View>
    )
}

export default ProdutoView