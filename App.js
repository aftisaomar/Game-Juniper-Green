import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList,SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Partie from './screens/Partie'
import RegleDuJeu from './screens/RegleDuJeu'
import Score from './screens/Score'

import styles from './styles'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers/index'



//Construction des menus
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      
      <TouchableOpacity style = {styles.buttonContainer}  onPress={() => navigation.navigate('RegleDuJeu')}>
  
        <Text>Regle du jeu</Text>

      </TouchableOpacity>


      <TouchableOpacity style = {styles.buttonContainer}  onPress={() => navigation.navigate('Partie')}>
  
        <Text>Commencer une Partie</Text>

      </TouchableOpacity>
      
    </View>
  )
}


// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();


// Définition de la navigation pour votre application
// Notez que initialRouteName définit la page par défaut
// quand l'application se charge
// Vous devez définir un wraper NavigationContainer puis
// utilisez les composants Stack.Navigator et Stack.Screen
// pour définir les éléments de navigation
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Partie" component={Partie} />
        <Stack.Screen name="RegleDuJeu" component={RegleDuJeu} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const store = createStore(reducer)

const App = () => {

  return(
    <Provider store = {store}>
      <Nav />
    </Provider> 
  ) 
};

export default App;
