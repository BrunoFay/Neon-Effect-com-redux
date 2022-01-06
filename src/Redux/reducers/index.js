
import { combineReducers } from 'redux'
const INITIAL_STATE ={name:'Trybe',color:'',blur:'ssssssssssssssssssssss',flashlight:false}
function neonReducer(state=INITIAL_STATE,action){
 /* switch(action.type){
  case NEON_COLOR:
    return {...state,color:action.payload}
   case NEON_NAME:
    return {...state,name:action.payload}
   default:
     return state
    } */
    const neonCases={
     NEON_COLOR:{...state,color:action.payload},
     NEON_NAME:{...state,name:action.payload},
     NEON_FLASHLIGH:{...state,flashlight:action.payload}
    }
    return neonCases[action.type]|| state
}

const rootReducer = combineReducers({neonReducer})
export default rootReducer