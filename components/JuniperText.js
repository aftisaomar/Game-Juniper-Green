// CustomText.js    
import React from 'react';
import {Text,StyleSheet} from 'react-native';

import styles from '../styles'

 const JuniperText = ({text,fontSize}) => {


    return (
      <Text style={[styles.text,{fontSize: fontSize,color: "#496b3a"}]}>
        {text}
      </Text>
    );
  
}


export default JuniperText;