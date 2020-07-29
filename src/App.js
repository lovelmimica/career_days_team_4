import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Pages
import Login from './pages/Login/Login';
import Events from './pages/Events';
import Evidence from './pages/Evidence';
import Statistics from './pages/Statistics';

//Components
import {ContextProvider} from './components/Context/Context'; 

function App() {
  return (
        <ContextProvider>
           <Route exact path='/' component={Login} />
           <Route path='/events' component={Events} />
           <Route path='/evidence' component={Evidence} />
           <Route path='/statistics' component={Statistics} />
        </ContextProvider>
  );
}

export default App;
