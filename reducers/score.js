import {PUSH, RESET,WINNER_IS} from '../constantes/actions'


const stateInit = {

    result : [],
    userWin : null
}


export default (state=stateInit,action={}) =>{


    switch(action.type){

        case PUSH :
            const newTab = state.result.map((element)=> element)
            newTab.push(action.userValue)
            newTab.push(action.computerValue)
            return {

                result : newTab
            }

        case RESET :
            return {

                ...stateInit
            }
            
        case WINNER_IS :
            
            return {
                ...state,
                userWin : action.payload

            }

        default:
          return state;

    }



}