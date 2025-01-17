
import {SET_COMPUTER_VALUE,SET_USER_VALUE,SET_TMP_USER_VALUE , RESET, INITIALIZE_VALUES} from '../constantes/actions'

const stateInit = {

    computerValue : null,
    valueUserTmp : '',
    userValue : null,
}


export default (state = stateInit, action = {}) =>{


    switch(action.type){



        case SET_TMP_USER_VALUE:
            return{

                ...state,
                valueUserTmp : action.payload,
            }

        case SET_COMPUTER_VALUE:

            return{
                ...state,
                computerValue : action.payload,
                valueUserTmp : ''

            }

        case SET_USER_VALUE:

            return{
                ...state,
                userValue : action.payload
            }

        case INITIALIZE_VALUES : 
        
            return {
                ...state,
                computerValue : null,
                userValue : null    
            }

    
        case RESET : 
            return {

                ...stateInit

            }    
         
        default:
            return state    



    }


}
