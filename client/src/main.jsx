import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StatemanageContextReducer } from './Pages/Statemanagement.jsx'
import {Provider} from 'react-redux'
import stote from './Pages/Redux/stote.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <StatemanageContextReducer> 
    <Provider store={stote} >
    <App/>
    </Provider>
   
    </StatemanageContextReducer>
   
  
)
