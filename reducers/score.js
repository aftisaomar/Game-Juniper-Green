import {PUSH, RESET,WINNER_IS, START_AT} from '../constantes/actions'


const stateInit = {

    result : [],
    start_at : null,
    userWin : null
}


export default (state=stateInit,action={}) =>{


    switch(action.type){

        case PUSH :
            const newTab = state.result.map((element)=> element)
            newTab.push(action.userValue)
            newTab.push(action.computerValue)
            return {
                ...state,
                result : newTab
            }

        case START_AT : 
            return {
                ...state,
                start_at : action.payload
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