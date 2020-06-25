import {PUSH, RESET} from '../constantes/actions'


const stateInit = {

    result : [],
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

        default:
          return state;

    }



}