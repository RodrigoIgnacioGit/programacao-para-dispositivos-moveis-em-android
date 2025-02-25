import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native'; // Importação para navegação
import Entypo from '@expo/vector-icons/Entypo';
import { IconSymbol } from '@/components/ui/IconSymbol';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';
 
 
export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const navigation = useNavigation();  


  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'black', dark: 'black' }}
      headerImage={
        <Image
          source={require('@/assets/images/manarestauranteicon.png')}
          style={styles.reactLogo}
        />
      }
    > 


      <View style={styles.container}>
 
      <View style={styles.headerusuario}>
        <Text style={styles.headertitleusuario}>Bem-vindo,</Text><Text style={styles.headertitlebvd}> colaborador! </Text>
        <TouchableOpacity style={styles.material}>
        <MaterialIcons name="person" size={34} color={'#C5C5C5'} /></TouchableOpacity>
        </View>

        
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setActiveTab('tab1')} style={styles.tabButton}>
                  <Text style={activeTab === 'tab1' ? styles.activeTabText : styles.inactiveTabText}>Filial 1</Text>
                </TouchableOpacity>
                <View style={styles.divider}/>
                <TouchableOpacity onPress={() => setActiveTab('tab2')} style={styles.tabButton}>
                  <Text style={activeTab === 'tab2' ? styles.activeTabText : styles.inactiveTabText}>Filial 2</Text>
                </TouchableOpacity>
              </View>
              
              {activeTab === 'tab1' ? (
                <View style={styles.tabContent1}>
                 
                  <Text style={styles.tabText}>Endereço: Av. Dr. Júlio Henrique Nascimento, XX - Jatiúca, Maceió - AL, XXXXX-XXX</Text>
                  <TouchableOpacity style={styles.iconestoquecima} onPress={() => {
                    navigation.navigate('Estoque'); 
                    setModalVisible(false); }}>
                       <Entypo name="box" size={36} color="black"  />
                    
                  </TouchableOpacity>               
        
                </View>
                
              ) : (
                <View style={styles.tabContent2}>
                  <Text style={styles.tabText}>Endereço: Av. Eng. Fernando Nogueira Braga, XX - Jatiúca, Maceió - AL, XXXXX-XXX</Text>
                  <TouchableOpacity style={styles.iconestoquecima2} onPress={() => {
                    navigation.navigate('Estoque 2');
                    setModalVisible(false);  }}>
                    <Entypo name="box" size={36} color="black"  />
                  </TouchableOpacity>   
                </View>
              )}
              
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <IconSymbol size={44} name="house.fill" color={'black'}   />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Maná App</ThemedText>
        
      </ThemedView>
 <View style={styles.titlefiliaisbox}>
      <Text style={styles.titlefiliais}>Clique aqui para acessar o estoque das filias cadastradas </Text> 
      </View>

      
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.openButton}>
          <Text style={styles.openButtonText}>Abrir</Text>
          <AntDesign style={styles.menubutton} name="menuunfold" size={31} color="#C5C5C5" />
        </TouchableOpacity>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>     O Maná App foi desenvolvido para transformar a maneira como o restaurante Maná Comida Express gerencia seu estoque, proporcionando  uma experiência ágil, intuitiva e eficiente para seus funcionários. Com uma interface amigável, o aplicativo facilita a visualização, adição e remoção de itens do estoque, garantindo um controle preciso dos insumos essenciais para o funcionamento diário do restaurante.
        {'\n'}{'\n'}  Através do Maná App, os colaboradores têm acesso a uma plataforma android que centraliza as informações sobre os produtos disponíveis, evitando desperdícios e otimizando o reabastecimento. O sistema permite que os funcionários solicitem mercadorias de forma simplificada, agilizando a reposição de ingredientes e garantindo que os suprimentos necessários estejam sempre à disposição.
        {'\n'}{'\n'}  Além disso, o aplicativo também oferece uma funcionalidade que possibilita a interação direta entre os funcionários e o setor encarregado de solicitar produtos e/ou ingredientes que não estão listados nos estoques.      
        {'\n'}{'\n'}  Outro grande benefício do aplicativo é a automatização dos processos que antes exigiam tempo e esforço dos colaboradores. A substituição de planilhas e anotações manuais por um sistema digital android intuitivo reduz a probabailidade de erros humanos e itimiza o tempo dos funcionários, permitindo que eles foquem em outras tarefas essenciais para o bom funcionamento do restaurante.
        {'\n'}{'\n'}  A digitalização do gerenciamento de estoque não é apenas uma tendência, mas uma necessidade para negócios que buscam excelência em seus processos internos. O Maná App chega para otimizar essa parte fundamental do restaurante, garantindo maior controle, transparência e agilidade para toda a equipe.
        {'\n'}{'\n'}  Dessa forma, os funcionários do Maná Comida Express passam a contar com uma ferramenta útil para facilitar o trabalho diário, assegurando que o restaurante esteja sempre pronto para atender seus clientes com máxima eficiência!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  stockButton: {
    color: '#3A3A3A',
    padding: 0,
  },
  headerusuario: {
    marginBottom:  1,
    left: 0,
    top: 2,
    paddingLeft:  100,
      elevation: 10,
    marginVertical:   0,
    marginHorizontal:   0,
    height:   30,
    marginTop: 0,
  backgroundColor: '#1a1a1a',
    marginLeft:  0,
    padding: 0,
    marginRight: 0,
    color: 'blue',
     borderRadius:   0,
   },
   headertitleusuario: {
    color: '#C5C5C5',
    opacity: 0.7,
    fontWeight: 'bold',
    fontSize: 23,
    top: -1.6,
    fontStyle: 'italic',
    left: 17,
    width:"100%",
  },
  material: {
    opacity: 0.5,
    marginHorizontal: 140,
    maxWidth: 32,
    paddingLeft: 3,
    left: 128,
    bottom: 63,
    paddingBottom: 2,
    borderRadius: 10,
  },
  headertitlebvd: {
    color: '#C5C5C5',
    opacity: 0.7,
    fontWeight: 'bold',
    fontSize: 23,
    top: -31.1,
     fontStyle: 'normal',
     width:"100%",
    left:134,
  },
  stockButtonText: {
    color: '#C5C5C5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 7,
    top: 4,
    marginBottom: 0,
    backgroundColor: 'black',
    marginLeft:  5,
    marginRight: 5 ,
    opacity: 0.8,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 20,
  },
  stepContainer: {
    padding: 19,
    marginHorizontal: 10,
    marginBottom: 6,
    backgroundColor: 'black',
    borderRadius: 10,
    top: -10,
    paddingBottom: 15,
    elevation: 20,
    marginRight: 8,
  },
  reactLogo: {
    height: 260,
    width: 530,
    bottom: -10,
    left: -50,
    position: 'relative',
    backgroundColor: 'black',
    borderRadius: 8,
    opacity: 0.8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    opacity: 0.9,
    backgroundColor: 'black',
    top: -43,
   marginTop: 0,
    marginBottom: -20,
    padding: 0,
    borderRadius: 8,
    elevation: 20,
    marginRight: 366,
    left: 333,
    paddingBottom: 6,
    marginLeft: 4,
    paddingLeft: 5,
    paddingTop: 4,
    paddingRight: 3
  },
  openButtonText: {
    fontSize: 14,
    color: '#C5C5C5',
    opacity: 1, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modalContent: {
    width: '87%',
    backgroundColor: '#3A3A3A',
    borderRadius: 30,
    padding: 10,
    borderWidth: 17,
    alignItems: 'center',
    paddingBottom:  10,
    paddingTop: 0,
  },
  tabContainer: {
    backgroundColor: '#1a1a1a',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 20,
    elevation: 3,
    top: 10,
  },
  tabButton: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  activeTabText: {
    fontSize: 18,
    color: '#F4C32E',
    opacity: 0.8,
  },
  inactiveTabText: {
    fontSize: 18,
    color: '#C5C5C5',
    opacity: 0.9,
  },
  tabContent1: {
    backgroundColor: '#3A3A3A',
    padding: 10,
    marginBottom: -50,
    borderRadius: 8,
    width: '80%',
    paddingTop: 30,
    alignItems: 'center',
  },
  tabContent2: {
    backgroundColor: '#3A3A3A',
    padding: 10,
    marginBottom: -50,
    borderRadius: 8,
    width: '80%',
    paddingTop: 30,
    alignItems: 'center',
  },
  tabText: {
    backgroundColor: 'black',
    fontSize: 13,
    color: '#c5c5c5',
    padding: 16,
    borderRadius: 10,
    width: 190,
    marginTop: -15,
    marginLeft: -50
  },
  closeButton: {
    backgroundColor: '#3A3A3A',
  bottom: -5,
  paddingBottom: 0,
    padding: 0,
    left: 106,
    top: -10
  },
  closeButtonText: {
    color: '#C5C5C5',
    fontSize: 16,
  },
  buttonText: { 
    color: 'white', 
    fontSize: 16 },
  button: { 
    backgroundColor: '#282828',
     padding: 15, 
     borderRadius: 10, 
     marginBottom: 10 },
  iconestoque:{ 
    color: 'white', 
    opacity: 1,
     marginBottom: 20},
  titlefiliais: {
    color: '#C5C5C5', 
    opacity: 0.7, 
    fontSize: 19, 
    fontWeight: 'bold', 
    padding: 4},
  menubutton: {
    color: '#C5C5C5', 
    opacity: 0.8, 
    marginLeft: 0, 
    marginTop: 0.1, },
  blocofiliais: {
    color: 'yellow'},
  titlefiliaisbox:{
    color: '#ffffff', 
    fontSize: 10, 
    left: 39,
     top:17, 
     paddingLeft: 10, 
     paddingRight:0, 
     width: '80%', 
     maxWidth: '70%',
      borderRadius: 8, 
      paddingBottom: 3, 
      backgroundColor: 'black', 
      fontWeight: 'bold'},
  iconestoquecima:{ 
    color: 'black', 
    opacity: 1,
     marginBottom: -40, 
     top: -88, 
     left: 106,},
  iconestoquecima2:{ 
    color: 'black', 
    opacity: 1, 
    marginBottom: -40, 
    top: -88,
     left: 106,},
  divider: {
    width: 1,
    backgroundColor: '#c5c5c5',
    opacity: 1,
    height: '80%',
    alignSelf:'center'
  }
});