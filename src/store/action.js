import {SET_WINNER} from './types'

export const setWinner = winner => {
    return ({type: SET_WINNER, payload : {value: winner}})
}

