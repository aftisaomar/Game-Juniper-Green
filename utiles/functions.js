

export const checkValue = (proposedValues,previousValue, value) => {

    //Verifier si la valeur courrante {@Value} est bien un multiple/diviseur
    // de {@previousValue}, puis verfier si cette valeur {@Value} 
    // n'exite pas dans le tableau {@proposedValues}

    //cas initiale, debut de partie
    if(previousValue == null){

       if( proposedValues.length == 0){

        return (value<=100 && value>0)
       }else{

        previousValue = proposedValues[proposedValues.length -1]

       }

        
    }

    


    if((value == previousValue) || (value>100 || value<=0) || (proposedValues && proposedValues.find((element)=> element == value ))){

        return false;
    }else {

        return (value > previousValue) ? (value%previousValue) == 0 : (previousValue % value) == 0

    }


}



export const generateComputerValue = (proposedValues,previousValue) => {

    const array = [ ...Array(100).keys() ].map( (i) => i +1 )

    array.sort((a,b) => { return 0.5 - Math.random() })

    const value = array.find((value) => checkValue(proposedValues,previousValue,value) )

    if(value){

        return value;

    }else{
        //retourner une valeur aleatoire
       const index=  Math.floor(Math.random() * Math.floor(100));
       return array[index];

    }


}