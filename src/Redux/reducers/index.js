import {NEON_COLOR,NEON_NAME} from '../actions'
import { combineReducers } from 'redux'
const INITIAL_STATE ={name:'Trybe',color:'',blur:'ssssssssssssssssssssssssssssss'}
function neonReducer(state=INITIAL_STATE,action){
 switch(action.type){
  case NEON_COLOR:
    return {...state,color:action.payload}
   case NEON_NAME:
    return {...state,name:action.payload}
   default:
     return state
 }
}

const rootReducer = combineReducers({neonReducer})
export default rootReducer