import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

//el archivo base es mejor nombrarlo con el name de store.js

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));