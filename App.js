//Importação para o menu lateral funcionar
import 'react-native-gesture-handler'

//Importar o container de navegação
//ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

//Importar o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//Importar as telas
import Jogador1 from './components/Jogador1';

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
      </Drawer.Navigator>
    </NavigationContainer>
  )
}