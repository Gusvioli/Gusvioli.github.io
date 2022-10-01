import React from 'react';
import './App.css';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Guscrono from './pages/Guscrono';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />
          <Route exact path="/guscrono" component={ Guscrono } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
