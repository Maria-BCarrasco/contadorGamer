//Importação para o menu lateral funcionar
import 'react-native-gesture-handler'

//Importar o container de navegação
//ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

//Importar o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//Importar as telas
import Jogador1 from './components/Jogador1';
import Jogador2 from './components/Jogador2';
import Jogador3 from './components/Jogador3';
import Jogador4 from './components/Jogador4';

//Cria o Drawer
const Drawer = createDrawerNavigator();

//Componente principal do APP
export default function APP(){
  //O que está dentro do return aparece na tela
  return (
    //Container principal da navegação
    <NavigationContainer>
       {/* Menu lateral */}
      <Drawer.Navigator>
      {/* Tela do Jogador1 */}
      <Drawer.Screen
        //Nome que aparece no Menu
        name="1 Jogador"
        //Componente que será aberto
        component={Jogador1}
      />
      <Drawer.Screen
      name="2 Jogadores"
      component={Jogador2}    
      />   
      <Drawer.Screen
      name="3 Jogadores"
      component={Jogador3}    
      />   
      <Drawer.Screen
      name="4 Jogadores"
      component={Jogador4}    
      />   
      </Drawer.Navigator>
    </NavigationContainer>
  )
}