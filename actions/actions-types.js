import { SET_USER_VALUE, SET_TMP_USER_VALUE ,SET_COMPUTER_VALUE, PUSH, RESET, WINNER_IS, START_AT } from "../constantes/actions"




export const setTmpUserValue = (payload) => {

    return {

        type : SET_TMP_USER_VALUE,
        payload
    }

}

export const setUserValue = (payload) => {

    return {

        type: SET_USER_VALUE,
        payload


    }

}


export const setComputerValue = (payload) => {

    return {

        type: SET_COMPUTER_VALUE,
        payload
    }


}

export const setGameOver = () => {

    return {
        type : GAME_OVER

    }

}


export const addResult = (userValue, computerValue) => {


    return {

        type: PUSH,
        userValue,
        computerValue,

    }

}

export const reset = () =>{


    return {

        type: RESET

    }


}


export const setWinner =(payload) => {

    return {

        type : WINNER_IS,
        payload
    }


}


export const startGame = (payload) => {

    return {

        type : START_AT,
        payload

    }

}

