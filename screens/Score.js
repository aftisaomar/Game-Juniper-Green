import React from 'react';
import { useSelector, useDispatch } from "react-redux"

import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList,SafeAreaView } from "react-native";
import JuniperText from '../components/JuniperText';
import styles from '../styles'
import { reset } from '../actions/actions-types';


const Score = ({ navigation, route }) => {

    const state = useSelector(state => state.score);
    const dispatch = useDispatch()
    const userValue = route.params.userValue
    const computerValue = route.params.computerValue

    const {result, userWin, start_at} = state
    let resultString = ''

    console.log(start_at)

    return(

     <View style = {styles.containerGame}>

        <JuniperText text = {'Game Juniper Green'} fontSize = {24} />
        
        <TouchableOpacity style= {styles.buttonContainer} onPress = {() => navigation.navigate('Home')}>

            <Text>Revenir sur la page principale</Text>

        </TouchableOpacity>

        <JuniperText 
            text = {start_at} 
            fontSize = {12} 
        />

        <JuniperText 
            text = {`\nLe jeu est terminé, vous avez ${userWin ? 'gagné' : 'perdu'} en ${result.length/2} tours`} 
            fontSize = {14} 
        />

        <TouchableOpacity style= {styles.buttonContainer} onPress = {() => {
            navigation.navigate('Partie')
            dispatch(reset())
            }}>

            <Text>Rejouez ?</Text>

        </TouchableOpacity>




        <Text>{'vos choix : \t\t\t choix du computer :'}</Text>
         

         {result && result.map((element,index)=>{

            if((index%2) == 0){

                resultString+= `\n${element}`
            }else{

                resultString+= `\t\t\t\t\t\t\t${element}`
            }

         })}

         <Text>{resultString}</Text>

     </View>   


    )

}


export default Score;