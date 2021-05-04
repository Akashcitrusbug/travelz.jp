import { SET_CURRENT_PAGE,SET_PREVIOUS_PAGE } from './types'

const initialState = {
    currentpage : 1,
    registerData:[],
}

const userReducer = (state = initialState, action) => {
    console.log(state)
    
    switch(action.type){
        case SET_CURRENT_PAGE: return {
            ...state,
            currentpage: action.payload.id, 
            registerData: state.registerData.concat(action.payload.values)
        }
        case SET_PREVIOUS_PAGE: return {
            ...state,
            currentpage: action.payload.id,
        }
        default: return state
    }
}

export default userReducer;