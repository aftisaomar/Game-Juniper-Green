import { combineReducers } from "redux";

import juniper from './juniper'
import score from './score'



const reducer = combineReducers({

    juniper,
    score


})

export default reducer;