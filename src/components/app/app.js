 import React from 'react'
 import {TicketsArea} from '../ticketsArea/ticketsArea'
 import {Provider} from 'react-redux'
 import store from '../Redux/Store/store'
 import './app.css'
 
 
 
 const  App = () => {
    return (
      <Provider store={store} >
      <TicketsArea></TicketsArea>
      </Provider>
    );
  }
  
  export default App;