import React from 'react';
import { useSelector, useDispatch } from "react-redux"

import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList,SafeAreaView } from "react-native";
import styles from '../styles';
import JuniperText from '../components/JuniperText';




const RegleDuJeu = ({ navigation }) => {


    return (

        <View style = {styles.container}>

           <JuniperText text={'Règle du jeu Juniper Green'} fontSize = {24}/>

            <TouchableOpacity style= {styles.buttonContainer} onPress = {() => navigation.navigate('Home')}>

                <Text>Revenir sur la page principale</Text>

            </TouchableOpacity>

            <JuniperText text={'Le jeu possède trois règles :'} fontSize = {14}/>

            <JuniperText text={'\nLe Joueur 1 choisit un nombre entre 1 et 100'} fontSize = {14}/>

            <JuniperText   text={`À tour de rôle, chaque joueur doit choisir un nombre parmi`}/>
            <JuniperText   text={'les multiples ou les diviseurs du nombre choisi précédemment '} />
            <JuniperText   text={'par son adversaire et inférieur à 100.'} fontSize = {14} />

            <JuniperText text = {`\n Un nombre ne peut être joué qu'une seule fois.`} fontSize = {14} />

            <JuniperText text = {`\nLe perdant étant le joueur qui ne trouve plus de multiples`} fontSize = {14} />
            <JuniperText text = {`ou de diviseurs communs au nombre précédemment choisi.`} fontSize = {14}  />

        </View>


    )



}

export default RegleDuJeu;