import React from 'react'
import ReactDOM from 'react-dom/client'
// no estoy seguro si estos inport van en este archivo!!!
//import { store } from './redux/store';
import { store } from './redux/store/store.js';
import { Provider } from "react-redux";
//
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store = {store}>
//       <App />
//     </Provider>

//     {/* Por las dudas este es el codigo viejo!!! */}
//     {/* <App /> */}
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
