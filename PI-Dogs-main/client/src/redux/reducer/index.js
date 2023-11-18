import { GET_DOGS,GET_DOG_BY_NAME } from "../actions";

//el archivo base es mejor nombrarlo con el name de reducer.js

let initialState = {allDogs: [],dogsCopy:[] , posts: [], allState: []}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogsCopy: action.payload,
            };

        case GET_DOG_BY_NAME:
            return {
                ...state,
                allDogs: action.payload,
            }

        default:
            return state;
    }
}

export default rootReducer;