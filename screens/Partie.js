import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux"

import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList,SafeAreaView } from "react-native";

import styles from '../styles'
import JuniperText from '../components/JuniperText';

import {setUserValue, setTmpUserValue, setComputerValue, addResult,startGame , reset, setWinner} from '../actions/actions-types'
import {checkValue, generateComputerValue} from '../utiles/functions'




const Partie = ({ navigation }) => {


    const stateParty = useSelector(state => state.juniper)
    const stateScore = useSelector(state => state.score)

    const dispatch = useDispatch()

    const {computerValue, userValue, valueUserTmp ,gameOver} = stateParty
    const {result, userWin } = stateScore

    let resultString = ''
  
    useEffect(()=>{


        if(computerValue != null){


            if(checkValue(result,userValue,computerValue)){

                dispatch(addResult(userValue,computerValue))

            }else{

                dispatch(setWinner(true));

            }


        }




    },[computerValue])




    useEffect(()=>{


        console.log('changemet du state userValue')

        if(userValue != null ) {

            if(checkValue(result,computerValue,userValue)){

                dispatch(setComputerValue(generateComputerValue(result,userValue)));
            }else{

                dispatch(setWinner(false));

            }
 
        }else{
            //premiere entréé dans ce screen donc prendre l'heure du commencement de la partie
           const start = Date.now();
           const date = new Date(start)
           dispatch(startGame(date.toLocaleString()))
        }
        

    },[userValue])




    useEffect(()=>{

        if(userWin != null){

            console.log('naviger vers la page Score')

            navigation.navigate('Score',{userValue: userValue, computerValue : computerValue});

        }



    },[userWin])



    return(
        <View style = {styles.containerGame}>

            <JuniperText  text = {'Game Juniper Green'} fontSize = {20}/>

            <TouchableOpacity 
             style= {styles.buttonContainer} 
             onPress = {() => navigation.navigate('Home')}>

                <Text >Revenir à la page principale</Text>

            </TouchableOpacity>

            <TouchableOpacity 
             style= {styles.buttonContainer} 
             onPress = {() => navigation.navigate('RegleDuJeu')}>

                <Text >Les règles du jeu</Text>

            </TouchableOpacity>

            <TouchableOpacity 
             style= {styles.buttonContainer} 
             onPress = {()=> dispatch(reset())}>

                <Text >Reset</Text>

            </TouchableOpacity>

            <JuniperText text = {`C'est à vous !\n`} fontSize = {15} /> 

            {computerValue!=null && <JuniperText text = {`\nComputer : ${computerValue}\n`} fontSize = {15} />}

            <TextInput 
             keyboardType='number-pad'
             style={{ height: 40, borderColor: 'gray', borderWidth: 5, margin: 10 }}
             onChangeText={(value) => dispatch(setTmpUserValue(value))}
             value = {valueUserTmp}
            />

            <TouchableOpacity 
             style= {styles.buttonContainer} 
             onPress = {() => dispatch(setUserValue(valueUserTmp))}>

               <Text >Valider</Text>

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


export default Partie;