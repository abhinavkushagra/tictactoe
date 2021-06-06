import {SET_WINNER} from './types'
import INITIAL_STATE from './state';

const winnerReducer = (state, action) => {
    console.log("Inside Reducer: ", action.payload.value)
     return { ...state,
         winner : action.payload.value}
}


const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_WINNER:
            return winnerReducer(state, action);
        default:
            return state;
    }
}

export default reducers;