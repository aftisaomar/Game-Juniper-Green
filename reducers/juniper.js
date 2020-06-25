
import {SET_COMPUTER_VALUE,SET_USER_VALUE,SET_TMP_USER_VALUE ,GAME_OVER, RESET} from '../constantes/actions'

const stateInit = {

    computerValue : null,
    valueUserTmp : '',
    userValue : null,
    gameOver : false,

}


export default (state = stateInit, action = {}) =>{


    switch(action.type){



        case SET_TMP_USER_VALUE:
            return{

                ...state,
                valueUserTmp : action.payload
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

        case GAME_OVER: 
        
            return {
                ...state,
                gameOver: true

            }

        case RESET : 
            return {

                ...stateInit

            }    
         
        default:
            return state    



    }


}
