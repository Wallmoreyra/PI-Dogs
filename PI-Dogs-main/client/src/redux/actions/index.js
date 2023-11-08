import axios from "axios";
//import {BACK_RUTE} from ('../../../../api/');

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";

export function getDogs(){
    return async function(dispatch){
        const response = await axios.get("http://192.168.0.101:3001/dogs");
        //const response = await axios.get(`${BACK_RUTE}/dogs`);
        return dispatch({

            type:"GET_DOGS",
            payload:response.data,
        })
    };
};

export function getByName(name){
    return async function(dispatch){
        const response = await axios.get(`http://192.168.0.101:3001/dogs/name?name=${name}`);
        //const response = await axios.get(`${BACK_RUTE}/dogs`);
        return dispatch({

            type:"GET_DOG_BY_NAME",
            payload:response.data,
        })
    };
}