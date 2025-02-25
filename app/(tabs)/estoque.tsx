import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';  
import { useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
 
 
const randomizeQuantity = (quantity: number) => {
  return Math.max(1, quantity + Math.floor(Math.random() * 7 - 3));
};

 
const ProductBlock = ({
  id,
  produto,
  quantidade,
  atualizarQuantidade,
}: {
  id: string;
  produto: string;
  quantidade: number;
  atualizarQuantidade: (id: string, newQuantity: number) => void;
}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.titulo}>{produto}</Text>
      <Text style={styles.texto}>Quantidade: {quantidade}</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity
          onPress={() => {
            if (quantidade > 0) {
              atualizarQuantidade(id, quantidade - 1);
            }
          }}
          style={styles.botao}
          disabled={quantidade === 0}  
        >
          <Text style={[styles.botaoTexto, quantidade === 0 && { opacity: 0.5 }]}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => atualizarQuantidade(id, quantidade + 1)}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function TabTwoScreen() {
const navigation = useNavigation();  
useEffect(() => {
  navigation.setOptions({
    tabBarStyle: {display: 'none'},
  });

  return()=>{
    navigation.setOptions({
      tabBarStyle: {display: 'flex'},
    });
    };
  }, [navigation]);

 
  const initialProducts = [
    { id: '1', produto: 'Arroz', preco: 7.99, quantidade: randomizeQuantity(6) },
    { id: '2', produto: 'Feijão', preco: 7.49, quantidade: randomizeQuantity(6) },
    { id: '3', produto: 'Café', preco: 24.99, quantidade: randomizeQuantity(6) },
    { id: '4', produto: 'Chá', preco: 7.99, quantidade: randomizeQuantity(4) },
    { id: '5', produto: 'Carne bovina', preco: 23.99, quantidade: randomizeQuantity(4) },
    { id: '6', produto: 'Frango', preco: 13.99, quantidade: randomizeQuantity(4) },
    { id: '7', produto: 'Batata', preco: 5.99, quantidade: randomizeQuantity(4) },
    { id: '8', produto: 'Milho', preco: 5.79, quantidade: randomizeQuantity(4) },
    { id: '9', produto: 'Aipim', preco: 15.99, quantidade: randomizeQuantity(4) },
    { id: '10', produto: 'Amendoin', preco: 14.59, quantidade: randomizeQuantity(4) },
    { id: '11', produto: 'Macarrão e massas', preco: 5.19, quantidade: randomizeQuantity(4) },
    { id: '12', produto: 'Ervilha', preco: 13.22, quantidade: randomizeQuantity(4) },
    { id: '13', produto: 'Tomate', preco: 8.48, quantidade: randomizeQuantity(4) },
    { id: '14', produto: 'Pimenta', preco: 22.49, quantidade: randomizeQuantity(6) },
    { id: '15', produto: 'Azeite', preco: 37.44, quantidade: randomizeQuantity(4) },
    { id: '16', produto: 'Soja', preco: 15.45, quantidade: randomizeQuantity(4) },
    { id: '17', produto: 'Refrigerante 1 350ml', preco: 4.29, quantidade: randomizeQuantity(4) },
    { id: '18', produto: 'Refrigerante 2 2L', preco: 9.99, quantidade: randomizeQuantity(4) },
    { id: '19', produto: 'Refrigerante 3 350ml', preco: 5.39, quantidade: randomizeQuantity(4) },
    { id: '20', produto: 'Sal', preco: 3.09, quantidade: randomizeQuantity(4) },
    { id: '21', produto: 'Manteiga', preco: 14.90, quantidade: randomizeQuantity(6) },
    { id: '22', produto: 'Óleo de cozinha', preco: 10.00, quantidade: randomizeQuantity(4) },
    { id: '23', produto: 'Queijo Mussarela', preco: 19.21, quantidade: randomizeQuantity(4) },
    { id: '24', produto: 'Açúcar refinado', preco: 6.35, quantidade: randomizeQuantity(5) },
    { id: '25', produto: 'Açúcar mascavo', preco: 9.90, quantidade: randomizeQuantity(3) },
    { id: '26', produto: 'Leite condensado', preco: 8.00, quantidade: randomizeQuantity(3) },
    { id: '27', produto: 'Leite', preco: 4.55, quantidade: randomizeQuantity(4) },
    { id: '28', produto: 'Creme de leite', preco: 4.45, quantidade: randomizeQuantity(5) },
    { id: '29', produto: 'Esponja de limpeza', preco: 1.99, quantidade: randomizeQuantity(7) },
    { id: '30', produto: 'Desengordurante', preco: 12.87, quantidade: randomizeQuantity(5) },
    { id: '31', produto: 'Cloro e Água Sanitária', preco: 34.59, quantidade: randomizeQuantity(7) },
    { id: '32', produto: 'Álcool 70%', preco: 9.32, quantidade: randomizeQuantity(5) },
    { id: '33', produto: 'Sabão em pó ou Líquido', preco: 8.99, quantidade: randomizeQuantity(7) },
    { id: '34', produto: 'Desinfetante', preco: 15.99, quantidade: randomizeQuantity(5) },
    { id: '35', produto: 'Detergente', preco: 5.99, quantidade: randomizeQuantity(5) },
    { id: '36', produto: 'Limpa-forno', preco: 13.90, quantidade: randomizeQuantity(5) },
  ];

 
  const [products, setProducts] = useState(initialProducts);
  const atualizarQuantidade = (id: string, newQuantity: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id
          ? { ...product, quantidade: newQuantity }
          : product
      )
    );
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.headoutcontainer}>
        <Text></Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Estoque</Text>
          <Entypo name="box" size={36} color="#C5C5C5" style={styles.icon} />
          <TouchableOpacity onPress={() => {
            setModalVisible(false); navigation.navigate('Início'); }}style={styles.stockButtonVoltar}>
            <AntDesign name="back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.shoppingcartbutton}> 
        <TouchableOpacity onPress={() => {
            setModalVisible(false); navigation.navigate('Solicitar'); }}>
            <AntDesign name="shoppingcart" size={25} opacity={1} color={'white'}  />
        </TouchableOpacity>
           </View>
  
        {products.map(product => (
          <ProductBlock
            key={product.id}
            id={product.id}
            produto={product.produto}
            quantidade={product.quantidade}
            atualizarQuantidade={atualizarQuantidade}
          />
        ))}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  headoutcontainer: {
    marginBottom: -20,
    marginTop: 0,
    marginLeft: 0,
    backgroundColor: '#1a1a1a',
  },
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 0,
    padding: 20,
    paddingTop: -50,
    backgroundColor: '#3A3A3A',
  },
  item: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    marginVertical: 8,
    borderRadius: 18,
    elevation: 5,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -1,
    color: '#C5C5C5',
  },
  texto: {
    fontSize: 16,
    color: '#C5C5C5',
    opacity:0.7,
    top:8,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -20,
  },
  botao: {
    backgroundColor: '#323232',
    padding: 8,
    borderRadius: 15,
    marginLeft: 10,
    minWidth: 40,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#C5C5C5', 
    fontSize: 18,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: -5,
    marginTop: -3,
    color: '#C5C5C5',
    marginLeft: -5,
    left: 86,
    opacity: 0.9,
  },
  icon: {
    marginLeft: 4,
    marginTop: 6,
    padding: 1,
    color: '#C5C5C5',
    opacity: 0.8,
    left: 89,
    top: 2,
  },
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 10,
  },
  stockButtonVoltar: {
    marginTop: 0,
    backgroundColor: '#1a1a1a',
    padding: 7,
    borderRadius: 8,
    elevation: 5,
    left: -190,
    top: 5,
    opacity: 0.7,
    marginBottom: 6,
  },
  
  shoppingcartbutton: {
    marginTop: 0,
    backgroundColor: '#1a1a1a',
    padding: 7,
    borderRadius: 8,
    elevation: 5,
    left:  328,
    width: 41,
    top: -40,
    opacity: 0.6,
    marginBottom: -28,
  },
});