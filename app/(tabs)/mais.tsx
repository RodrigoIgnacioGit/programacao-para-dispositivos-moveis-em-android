import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';



const chaveFilial1 = 'tabTwo_product_quantity_$[id}';
const chaveFilial2 = 'tabTwo2_product_quantity_${id}';

interface Item {
  id: string;
  nome: string;
  preco: string;
  quantidade: number;
  filialId: string;
}

interface Categoria {
  id: string;
  nome: string;
  itens: Item[];
}

interface Filial {
  id: string;
  nome: string;
  categorias: Categoria[];
}

const filiais: Filial[] = [
  {
    id: "1",
    nome: "Filial 1",
    categorias: [
      { id: "1", nome: "Cozinha", itens: [
        { id: "20", nome: "Sal", preco: "3.09", quantidade: 0, filialId: "1" }, 
        { id: "21", nome: "Manteiga", preco: "14.90", quantidade: 0, filialId: "1" }, 
        { id: "22", nome: "Óleo de cozinha", preco: "10.00", quantidade: 0, filialId: "1" },
        { id: "23", nome: "Queijo Mussarela", preco: "19.21", quantidade: 0, filialId: "1" }, 
        { id: "24", nome: "Açúcar refinado", preco: "6.35", quantidade: 0, filialId: "1" }, 
        { id: "25", nome: "Açúcar mascavo", preco: "9.90", quantidade: 0, filialId: "1" },
        { id: "26", nome: "Leite condensado", preco: "8.00", quantidade: 0, filialId: "1" }, 
        { id: "27", nome: "Leite", preco: "4.55", quantidade: 0, filialId: "1" }, 
        { id: "28", nome: "Creme de leite", preco: "4.45", quantidade: 0, filialId: "1" }]},
     
        { id: "2", nome: "Estoque", itens: [
        { id: "1", nome: "Arroz", preco: "7.99", quantidade: 0, filialId: "1" }, 
        { id: "2", nome: "Feijão", preco: "7.49", quantidade: 0, filialId: "1" }, 
        { id: "3", nome: "Café", preco: "24.99", quantidade: 0, filialId: "1" },
        { id: "4", nome: "Chá", preco: "7.99", quantidade: 0, filialId: "1" }, 
        { id: "5", nome: "Carne bovina", preco: "23.99", quantidade: 0, filialId: "1" }, 
        { id: "6", nome: "Frango", preco: "13.99", quantidade: 0, filialId: "1" },
        { id: "7", nome: "Batata", preco: "5.99", quantidade: 0, filialId: "1" }, 
        { id: "8", nome: "Milho", preco: "5.79", quantidade: 0, filialId: "1" }, 
        { id: "9", nome: "Aipim", preco: "15.99", quantidade: 0, filialId: "1" },
        { id: "10", nome: "Amendoin", preco: "14.59", quantidade: 0, filialId: "1" }, 
        { id: "11", nome: "Macarrão e massas", preco: "5.19", quantidade: 0, filialId: "1" }, 
        { id: "12", nome: "Ervilha", preco: "13.22", quantidade: 0, filialId: "1" },
        { id: "13", nome: "Tomate", preco: "8.48", quantidade: 0, filialId: "1" },
        { id: "14", nome: "Pimenta", preco: "22.49", quantidade: 0, filialId: "1" }, 
        { id: "15", nome: "Azeite", preco: "37.44", quantidade: 0, filialId: "1" }, 
        { id: "16", nome: "Soja", preco: "15.45", quantidade: 0, filialId: "1" },
        { id: "17", nome: "Refrigerante 1 350ml", preco: "4.29", quantidade: 0, filialId: "1" },
        { id: "18", nome: "Refrigerante 2 2L", preco: "9.99", quantidade: 0, filialId: "1" }, 
        { id: "19", nome: "Refrigerante 3 350ml", preco: "5.39", quantidade: 0, filialId: "1"},
        { id: "666", nome: "Pudim", preco: "550.490 em BTC", quantidade: 0, filialId: "1"}]},
       

        { id: "3", nome: "Limpeza", itens: [
        { id: "29", nome: "Esponja de Limpeza", preco: "1.99", quantidade: 0, filialId: "1"},
        { id: "30", nome: "Desengordurante", preco: "12.87", quantidade: 0, filialId: "1" }, 
        { id: "31", nome: "Cloro e Água Sanitária", preco: "34.59", quantidade: 0, filialId: "1" }, 
        { id: "32", nome: "Álcool 70%", preco: "9.32", quantidade: 0, filialId: "1" },
        { id: "33", nome: "Sabão em pó ou Líquido", preco: "8.99", quantidade: 0, filialId: "1" }, 
        { id: "34", nome: "Desinfetante", preco: "15.99", quantidade: 0, filialId: "1" }, 
        { id: "35", nome: "Detergente", preco: "5.99", quantidade: 0, filialId: "1" },
        { id: "36", nome: "Limpa-forno", preco: "13.90", quantidade: 0, filialId: "1"}]},
    ],
  },
  {
    id: "2",
    nome: "Filial 2",
    categorias: [
      { id: "1", nome: "Cozinha", itens: [
        { id: "20", nome: "Sal", preco: "3.09", quantidade: 0, filialId: "2" }, 
        { id: "21", nome: "Manteiga", preco: "14.90", quantidade: 0, filialId: "2" }, 
        { id: "22", nome: "Óleo de cozinha", preco: "10.00", quantidade: 0, filialId: "2" },
        { id: "23", nome: "Queijo Mussarela", preco: "19.21", quantidade: 0, filialId: "2" }, 
        { id: "24", nome: "Açúcar refinado", preco: "6.35", quantidade: 0, filialId: "2" }, 
        { id: "25", nome: "Açúcar mascavo", preco: "9.90", quantidade: 0, filialId: "2" },
        { id: "26", nome: "Leite condensado", preco: "8.00", quantidade: 0, filialId: "2" }, 
        { id: "27", nome: "Leite", preco: "4.55", quantidade: 0, filialId: "2" }, 
        { id: "28", nome: "Creme de leite", preco: "4.45", quantidade: 0, filialId: "2" }]},
     
        { id: "2", nome: "Estoque", itens: [
          { id: "1", nome: "Arroz", preco: "7.99", quantidade: 0, filialId: "2" }, 
          { id: "2", nome: "Feijão", preco: "7.49", quantidade: 0, filialId: "2" }, 
          { id: "3", nome: "Café", preco: "24.99", quantidade: 0, filialId: "2" },
          { id: "4", nome: "Chá", preco: "7.99", quantidade: 0, filialId: "2" }, 
          { id: "5", nome: "Carne bovina", preco: "23.99", quantidade: 0, filialId: "2" }, 
          { id: "6", nome: "Frango", preco: "13.99", quantidade: 0, filialId: "2" },
          { id: "7", nome: "Batata", preco: "5.99", quantidade: 0, filialId: "2" }, 
          { id: "8", nome: "Milho", preco: "5.79", quantidade: 0, filialId: "2" }, 
          { id: "9", nome: "Aipim", preco: "15.99", quantidade: 0, filialId: "2" },
          { id: "10", nome: "Amendoin", preco: "14.59", quantidade: 0, filialId: "2" }, 
          { id: "11", nome: "Macarrão e massas", preco: "5.19", quantidade: 0, filialId: "2" }, 
          { id: "12", nome: "Ervilha", preco: "13.22", quantidade: 0, filialId: "2" },
          { id: "13", nome: "Tomate", preco: "8.48", quantidade: 0, filialId: "2" },
          { id: "14", nome: "Pimenta", preco: "22.49", quantidade: 0, filialId: "2" }, 
          { id: "15", nome: "Azeite", preco: "37.44", quantidade: 0, filialId: "2" }, 
          { id: "16", nome: "Soja", preco: "15.45", quantidade: 0, filialId: "2" },
          { id: "17", nome: "Refrigerante 1 350ml", preco: "4.29", quantidade: 0, filialId: "2" },
          { id: "18", nome: "Refrigerante 2 2L", preco: "9.99", quantidade: 0, filialId: "2" }, 
          { id: "19", nome: "Refrigerante 3 350ml", preco: "5.39", quantidade: 0, filialId: "2"},
          { id: "666", nome: "Pudim", preco: "550.490 em BTC", quantidade: 0, filialId: "2"}]},
       

        { id: "3", nome: "Limpeza", itens: [
          { id: "29", nome: "Esponja de Limpeza", preco: "1.99", quantidade: 0, filialId: "2"},
          { id: "30", nome: "Desengordurante", preco: "12.87", quantidade: 0, filialId: "2" }, 
          { id: "31", nome: "Cloro e Água Sanitária", preco: "34.59", quantidade: 0, filialId: "2" }, 
          { id: "32", nome: "Álcool 70%", preco: "9.32", quantidade: 0, filialId: "2" },
          { id: "33", nome: "Sabão em pó ou Líquido", preco: "8.99", quantidade: 0, filialId: "2" }, 
          { id: "34", nome: "Desinfetante", preco: "15.99", quantidade: 0, filialId: "2" }, 
          { id: "35", nome: "Detergente", preco: "5.99", quantidade: 0, filialId: "2" },
          { id: "36", nome: "Limpa-forno", preco: "13.90", quantidade: 0, filialId: "2"}]},
    ],
  },
];

export default function App() {
  
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");
  const [filiaisState, setFiliaisState] = useState(filiais);
  const [filialSelecionada, setFilialSelecionada] = useState(filiais[0]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(filialSelecionada.categorias[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [customAlertVisible, setCustomAlertVisible] = useState(false);
  const [emptyAlertVisible, setEmptyAlertVisible] = useState(false);
  const handleSend = () => {
    if (text.trim()) {
      setCustomAlertVisible(true);
      setText("");
    } else {
      setEmptyAlertVisible(true);
    }
  };


  const adicionarItem = async (item: Item) => {
     
     
     const filiaisAtualizadas = [...filiaisState];
     const filialIndex = filiaisAtualizadas.findIndex(f => f.id === item.filialId);
     const categoriaIndex = filiaisAtualizadas[filialIndex].categorias.findIndex(c => c.id === categoriaSelecionada.id);
     const itemIndex = filiaisAtualizadas[filialIndex].categorias[categoriaIndex].itens.findIndex(i => i.nome === item.nome);
   
     if (itemIndex !== -1) {
       filiaisAtualizadas[filialIndex].categorias[categoriaIndex].itens[itemIndex].quantidade += 1;
     }
   
     setFiliaisState(filiaisAtualizadas);
     setCategoriaSelecionada(filiaisAtualizadas[filialIndex].categorias[categoriaIndex]); 
   
     
     try {
       await AsyncStorage.setItem('tabTwo_product_quantity_$[item.id}', JSON.stringify(filiaisAtualizadas[filialIndex].categorias[categoriaIndex].itens[itemIndex].quantidade));
     } catch (error) {
       console.error("Erro ao salvar no AsyncStorage", error);
     }
   };
 
  const resetarQuantidades = () => {
     
    const filiaisAtualizadas = filiaisState.map(filial => ({
      ...filial,
      categorias: filial.categorias.map(categoria => ({
        ...categoria,
        itens: categoria.itens.map(item => ({ ...item, quantidade: 0 }))  
      }))
    }));

    setFiliaisState(filiaisAtualizadas);  
    setFilialSelecionada(filiaisAtualizadas[0]);  
    setCategoriaSelecionada(filiaisAtualizadas[0].categorias[0]);  
  };

  const obterNomeFilial = (filialId: string) => {
    const filial = filiais.find((f) => f.id === filialId);
    return filial ? filial.nome : 'Desconhecida';
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {filiaisState.map((filial) => (
          <TouchableOpacity
            key={filial.id}
            style={[styles.tab, filialSelecionada.id === filial.id && styles.selectedTab]}
            onPress={() => {
              setFilialSelecionada(filial);
              setCategoriaSelecionada(filial.categorias[0]);
            }}
          >
            <Text style={styles.tabText}>{filial.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tabsContainer}>
        {filialSelecionada.categorias.map((categoria) => (
          <TouchableOpacity
            key={categoria.id}
            style={[styles.tab, categoriaSelecionada.id === categoria.id && styles.selectedTab]}
            onPress={() => setCategoriaSelecionada(categoria)}
          >
            <Text style={styles.tabText}>{categoria.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={categoriaSelecionada.itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          
          <View style={styles.item}>
            
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text style={styles.texto}>Preço: R${item.preco}</Text>
            <Text style={styles.texto}>Quantidade: {item.quantidade}</Text>
            
            <TouchableOpacity onPress={() => adicionarItem(item)} style={styles.botaoAdicionar}>
              
              <Text style={styles.textoBotao}>+</Text>
           
            </TouchableOpacity>
          </View>
        )}
      />

 


      

      <Modal visible={modalVisible} animationType="slide" transparent>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitulo}>Itens Solicitados</Text>
            <FlatList
        data={filiaisState
          .flatMap(filial => 
            filial.categorias.flatMap(categoria => 
              categoria.itens.filter(item => item.quantidade > 0)
            )
          )}
             
             
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.modalTexto}>
                 {obterNomeFilial(item.filialId)} - {item.nome} / Quantidade: {item.quantidade}   
                </Text>
              )}
            />
            <TouchableOpacity onPress={() => { setModalVisible(false); resetarQuantidades(); }} style={styles.modalFechar}>
              <Text style={styles.textoBotao2}>x</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <View style={styles.containerbotao2}>
        <Text style={styles.titulo2}> Faça sua solicitação</Text>
      <View style={styles.containerbotao}>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder=" Digite algo..."
          placeholderTextColor="black"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputout}
          maxLength={30}
        />
        <TouchableOpacity onPress={handleSend} style={styles.button}>
          <Ionicons name="send" size={20} left={1} color="#3A3A3A" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
  style={styles.openModalButton} 
  onPress={() => {
     
    
    setModalVisible(true);  
  }}
>
  <AntDesign name="shoppingcart" size={40} opacity={0.7} color="#F4C32E" />
</TouchableOpacity>
      </View>
      

      <Modal visible={customAlertVisible} transparent animationType="fade">
        <View style={styles.alertOverlay}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertTitle}>Tudo certo!</Text>
            <Text style={styles.alertMessage}>Sua solicitação foi enviada com sucesso.</Text>
            <TouchableOpacity onPress={() => setCustomAlertVisible(false)} style={styles.alertButton}>
              <AntDesign name="check" size={20} color="#C5C5C5" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={emptyAlertVisible} transparent animationType='fade'>
        <View style={styles.alertOverlay}>
          <View style={styles.alertContainer}>
            <Text style={styles.erroralert}>Ops. Algo deu errado!</Text>
            <Text style={styles.alertMessage}>Por favor, digite algo.</Text>
            <TouchableOpacity onPress={() => setEmptyAlertVisible(false)} style={styles.alertButton}>
              <AntDesign name="check" size={20} color="#C5C5C5" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A3A3A',
    padding:  0,
    marginBottom: 0,
  },
  tabsContainer: {
    marginTop: 30,
    marginBottom: -30,
    bottom: 30,
    
    
    flexDirection: 'row',
     
    backgroundColor: '#3A3A3A',
    
    
  },
  containerbotao: {
    flexDirection: "row",
    alignItems: "center",
    padding:  10,
    borderRadius: 8,
  right:66,
  bottom:8,
    marginHorizontal: 110,
    marginTop:  0,
    marginBottom:  0,
   
    color: 'black'
  },
  containerbotao2:{
maxHeight:70,
marginBottom: 0,
 borderTopColor: '#1a1a1a',
 borderBottomColor: '#1a1a1a',
 borderLeftColor:'#1a1a1a',
 borderRightColor:'#1a1a1a',
 borderWidth:2,
 marginHorizontal:-10,
left: 0,
padding:0,
color: '#1a1a1a',
backgroundColor:'#1a1a1a',
minHeight:'10%'


  },
  button: {
    backgroundColor: "black",
    padding: 4,
    borderRadius: 10,
    marginLeft: 2,
  },

  inputout: {
    fontSize: 18,
    flex: 1,
    borderWidth: 2,
    backgroundColor: '#3A3A3A',
    borderColor: "black",
    borderRadius: 8,
    padding:  0,
    color: "#c5c5c5",
    height:30,
    maxHeight:100,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    
    backgroundColor: 'black',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#F4C32E', 

  },
  tabText: {
    fontSize: 18,
    color: '#C5C5C5',
    opacity: 0.9,
  },
  item: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    marginVertical: 4,
    borderRadius: 18,
    elevation: 10,
    marginHorizontal: 21,
    height: 111,
    top:  1,
    bottom:  0,
    marginBottom:10,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -1,
    color: '#C5C5C5',
  },
  titulo2: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop:  0,
    bottom: 0,
    color: '#C5C5C5',
    left:55,
    opacity:0.8
    
    
  },
  texto: {
    fontSize: 16,
    color: '#C5C5C5',
    opacity:0.7
  },
  botaoAdicionar: {
    backgroundColor: '#323232',
    padding:   0,
    borderRadius: 15,
    bottom: 55,
    width: 45,
    left: 275,
    height: 40,
    
    alignItems: 'center',
  },
 
  textoBotao: {
    color: '#C5C5C5',  
    fontSize: 20,
     bottom:0,
     top:6,
  },
  textoBotao2: {
    color: '#C5C5C5',  
    fontSize: 18,
     bottom:2,
  },
  modalButton: {
    backgroundColor: '#F4C32E',
    padding: 15,
    margin: 20,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  modalContent: {
    backgroundColor: "#282828",
    paddingVertical: 0,
    
    paddingHorizontal:  10,
    height: 400,
    
    borderRadius:8,
    alignItems: "center",
    width: 300,
    opacity: 1,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    borderWidth: 5,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 20,
    height: 40,
    width: 305,
    borderRadius:  8,
    paddingLeft: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    color:'#F4C32E',
     opacity:0.8
    
  },
  modalTexto: {
    fontSize: 15,
    color:'#C5C5C5',
    fontWeight:'bold',
    lineHeight:15,
    top:2,
    marginBottom:1,
    padding:5,
   opacity:0.7,
   textAlign:  'left'
  },
  modalFechar: {
    marginTop: 0,
    backgroundColor: 'black',
   
    paddingLeft:  8,
    paddingRight:  8,
    paddingTop:  0,
    paddingBottom: 0,
    left:130,
     bottom:367.5,
     marginBottom: 0,
     borderRadius: 15,
  },
 
  openModalButton: {
    position: 'absolute',
    bottom:  6.5,
    right: 60,
    padding:4,
    paddingLeft:3,
    paddingRight:5,
    paddingTop:3,
    paddingBottom:3,
    borderRadius: 12,   
    borderWidth:2,
    
   
   
  },
  alertOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertContainer: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 220,
    opacity: 0.9,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    top: 4,
    left:48,
    width:"100%",
  },
  alertMessage: {
    fontSize: 16,
    color: "#000",
    padding: 10,
    textAlign: "center",
    marginBottom: 5,
    marginTop: 0,
    top: 3,
  },
  erroralert: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    top: 4,
    left:37,
    width:"135%",
    paddingHorizontal:0,
  },
  alertButton: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },


});