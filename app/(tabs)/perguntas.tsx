import { StyleSheet, Image, View, ScrollView, Text, TouchableOpacity, Linking } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { IconSymbol } from '@/components/ui/IconSymbol';
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function TabTwoScreen3() { 
 
  const handlePress = async (url: string) => {
     await Linking.openURL(url); 
 
  };




  
  return (  
    
    <View style={{ flex: 1 }}>

      
    
    
        <View style={styles.utilistyleback}>
        <Text style={styles.utilistyle}>Utilitário do Maná App</Text></View>


     <ScrollView style={styles.containerperg}>


     <View style={styles.headerusuario}>
        <Text style={styles.headertitleusuario}>Olá,</Text><Text style={styles.headertitlebvd}> Usuário! </Text>
        <TouchableOpacity style={styles.material}>
        <MaterialIcons name="person" size={34} color={'#C5C5C5'} /></TouchableOpacity>
        </View>
 

 
      <Collapsible title="Como funciona o Utilitário do Maná App?">
      <Text style={styles.texto1}>Nesta página você poderá encontrar as dúvidas mais recorrentes e como resolvê-las de forma mais ágil, esta página também é direcionada para a explicação de como funciona o aplicativo Maná App.</Text>
      </Collapsible>



      <Collapsible title="Como funciona cada aba e suas funcionalidades dentro do Maná App?">
      <Text style={styles.texto}>O Maná App é dividido entre três menus distintos (Início, Solicitar e Usuário), e em cada um deles tem suas funções distintas. 
      {'\n'}A página "Início" <IconSymbol size={21} name="house.fill" color='black' /> é apresentado uma página principal com a descrição do aplicativo, lá também é apresentado um botão para acessar as filiais do Maná Comida Express.
      {'\n'}Na página "Solicitar" <AntDesign name="shoppingcart" size={21} color="black" /> tem a função de solicitação e reposição de produtos e ingredientes que estão faltando nos estoques das filiais da empresa.
      {'\n'}Por fim, a página "Usuário" <AntDesign size={21} name="user" color="black" /> foi feita no intuito de facilitar o acesso e o entendimento ao aplicativo.
       </Text>
      </Collapsible>

      <Collapsible title="Como faço para acessar o menu das filiais do Maná Comida Express?">
      <Text style={styles.texto}>Dentro do Maná App, o menu de filiais pode ser encontrado no menu "Início" <IconSymbol size={21} name="house.fill" color='black' /> em um botão na lateral direita, após clicar em "Abrir" <AntDesign name="menuunfold" size={21} color="black" /> , uma mensagem aparecerá contendo informações sobre o local das filiais cadastradas.
     
        </Text>
  
      </Collapsible>


      <Collapsible title="Como faço para acessar o menu de estoque das filiais do Maná Comida Express?">
      <Text style={styles.texto}>Dentro do Maná App, para acessar o menu de estoque das filiais do Maná Comida Express, abrir o menu das filiais na página de "Início" <IconSymbol size={21} name="house.fill" color='black' /> , após isso escolher uma das filiais cadastradas e então clicar no botão de "Estoque" <Entypo name="box" size={21} color="black"/> que levará ao estoque da filial escolhida.   
     
        </Text>
  
      </Collapsible>

      <Collapsible title="Como faço para adicionar ou remover os produtos e ingredientes do estoque das filiais do Maná Comida Express?">
      <Text style={styles.texto}>Para poder adicionar ou remover os produtos e ingredientes dos estoques das filiais do Maná Comida Express dentro do Maná App, você precisará primeiro ir até a página de "Início" <IconSymbol size={21} name="house.fill" color='black'/>, abrir o menu de filiais cadastradas, logo após isso terá que escolher uma das filiais mostradas, então clicar no botão "Estoque" <Entypo name="box" size={21} color="black"/>, nesta página você deverá procurar pelo item desejado e caso escolha adicionar clique no botão " <Text style={styles.botaoTexto}> + </Text>", para remover basta clicar no botão " <Text style={styles.botaoTexto}> - </Text>".
  
        </Text>
  
      </Collapsible>

      <Collapsible title="Como faço para resetar todos as quantidades dos protudos no estoque do Maná App?">
      <Text style={styles.texto}>Para reiniciar o estoque das filiais, basta ir em "Início" <IconSymbol size={21} name="house.fill" color='black' /> e depois clicar no botão lateral de filiais cadastradas "Abrir" <AntDesign name="menuunfold" size={21} color="black" />, logo após isso, selecione a filial desejada e clique em "Estoque" <Entypo name="box" size={21} color="black"/>, desça a página completamente e achará um botão para poder resetar o estoque.
  
        </Text>
  
      </Collapsible>

      <Collapsible title="Como faço para fazer uma solicitação de algum produto no Estoque do Maná Comida Express?">
      <Text style={styles.texto}>Para fazer solicitação de produtos e/ou ingredientes que estão faltando no estoque do Maná Comida Express, dentro do Maná App o colaborador deverá clicar no menu "Solicitar" <AntDesign name="shoppingcart" size={21} color="black" />, então abrirá uma página que contém todos os itens que estão na página de "Estoque"  <Entypo name="box" size={21} color="black"/> e lá o usuário poderá solicitar os produtos e/ou ingredientes que estão em falta, o colaborador poderá adicionar os itens, que estão separados em suas categorias próprias, separados em cada uma das filiais e então basta clicar em <AntDesign name="shoppingcart" size={21} color="#F4C32E" /> que os itens serão solicitados.
   
        </Text>
  
      </Collapsible>
 
      <Collapsible title="Como faço para fazer uma solicitação de um produto que não contém na listagem de solicitação/estoque do Maná App?">
      <Text style={styles.texto}>Caso o produto e/ou ingrediente que deseje não esteja disponível no Maná App, você poderá solicitar esses itens extras pelo menu "Solicitar" <AntDesign name="shoppingcart" size={21} color="black" /> no bloco de requisições, lá terá uma caixa de texto para poder solicitá-lo.
  
        </Text>
  
      </Collapsible>


      <Collapsible title="Ocorreu um erro dentro do Maná App, o que eu devo fazer?">
      <Text style={styles.texto}>Caso haja algum erro, ou ocorra algum problema dentro do Maná App, por favor nos contate para que possamos ajudá-lo a resolver o problema o mais rápido possível:
      {'\n'}<Text style={styles.numbertel}>TEL<Entypo name="phone" size={21} color="green" /> : (xx) xxxxx-xxxx </Text>
      {'\n'}<Text style={styles.numbertel}>WHATSAPP <FontAwesome name="whatsapp" size={21} color="green" /> : (xx) xxxxx-xxxx </Text>
        
  
        </Text>
  
      </Collapsible>










      </ScrollView>
      
       
      <View style={styles.contactcontainer}>
        <TouchableOpacity onPress={() => handlePress('https://twitter.com')}> 
          <Text style={styles.twittericon}>/Twitter<Feather name="twitter" size={20} color="black"/> </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('https://instagram.com')}> 
          <Text style={styles.instagramicon}>/Instagram<Entypo name="instagram" size={20}  color="black" /> </Text> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('https://facebook.com')}> 
          <Text style={styles.facebookicon}>/Facebook<Entypo name="facebook" size={20} color="black" />  </Text> 
        </TouchableOpacity>
      </View>
    </View>
  





 








  );
}
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
    backgroundColor: '#3A3A3A'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    padding :100,
    color: 'blue',
    backgroundColor: '#3A3A3A'
  },
  containerperg:{
   
    backgroundColor: '#3A3A3A',
    marginTop:  -34,
   marginBottom: -5,
   paddingBottom: 0,
    bottom: -25,
    opacity: 1,
    
    
    
    
  },
  containertext: { 
    color: 'black',
    width: '28%',
    paddingTop: 10,
    paddingBottom: 10,
    left: 299,
    opacity: 1,
    paddingLeft: 12,
    backgroundColor: '#3A3A3A',
    fontWeight: 'bold',
    
  },
  twittericon: {
  
 
 left:  29,
 bottom: 0,
 top: 4,
 paddingBottom: 0,
 fontWeight: 'bold',
 fontSize: 17,
 color: 'black'
  },
  instagramicon: {
  paddingTop: 0, 
  color: 'black',
  left:  151,
  bottom: 20,
  fontWeight: 'bold',
  fontSize: 17
    },
  facebookicon: {
    
    paddingTop: 0, 
    left:  291,
    bottom: 43,
  fontWeight: 'bold',
  fontSize: 17,
  
   color: 'black'
     
    },
  lateral: {
    backgroundColor: 'yellow',
    color: 'black',
     
  },
  contextcontainer:{
    color: 'blue',
    backgroundColor: 'blue'
  },
  contactcontainer:{
    bottom: 0,
    backgroundColor: '#F4C32E',
    paddingBottom: 0,
    top:  0,
    paddingTop: 0,
    maxHeight: 30,
  opacity: 0.6,
  
    
  },
  texto1:{
    textAlign:'center',
    color: '#C5C5C5',
    padding: 0,
    lineHeight: 20,
    left: 3,
     
    paddingRight: 0,
     marginBottom: 0,
     marginVertical:-10,
    marginRight: 10,
    paddingBottom:  5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    top:10,
    elevation: 20,
    opacity: 0.6,
    
  },
  texto: {
    textAlign:'center',
    color: '#C5C5C5',
    padding: 0,
    lineHeight: 20,
    left: 3,
     
    paddingRight: 0,
     marginBottom: 0,
     marginVertical:5,
    marginRight: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    top: -2,
    elevation: 20,
    opacity: 0.6,
    
  },
 
  headerusuario: {
   marginBottom:  37,
   left: 0,
   top: 2,
   paddingLeft: 100,
     elevation: 20,
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
    top: 0,
    fontStyle: 'italic',
    left: 123,
    elevation: 20,
    
  },
  headertitlebvd: {
     
    color: '#C5C5C5',
    opacity: 0.7,
    fontWeight: 'bold',
    fontSize: 23,
    top: -29,
    elevation: 20,
    left:160,
  },
  profilebuttonusuario: {
  
 
  },
  material: {
    opacity: 0.5,
    marginHorizontal: 100,
    maxWidth: 38,
    paddingLeft: 3,
    left: 150,
    bottom: 63,
    paddingBottom: 2,
    
    borderRadius: 10,
  },
  utilistyle: {
    marginLeft: 90,
    marginRight: 90,
    paddingLeft: 15,
    borderRadius: 8,
  fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 20,
   color: '#c5c5c5',
   top: 1,
   marginTop: -7,
   
   opacity: 0.8,
   paddingBottom: 3,
   
   
  },
  utilistyleback: {
    paddingBottom: 0,
    marginTop: 0,
    top: 0,
    bottom: 0,
    marginBottom:18,
    paddingTop: 0,
  
 
 

   opacity: 1,
},
botaoTexto: {
  color: 'black',  
  fontSize: 25,
  fontStyle: 'normal'
},
numbertel: {
  color: 'black',
  fontSize: 18,
  
   lineHeight:23
  
}
});
