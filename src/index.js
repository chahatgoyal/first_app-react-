import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/footer';
import Header from './components/header';

const context = React.createContext();
export const ctxConsumer = context.Consumer;
const ctxProvider = context.Provider;

const animals = ['snake','dog','horse']
const routing = (
     <BrowserRouter>
     <context.Provider value={{animals: animals}}>
     <div>
       <Route exact path="/" component={App}></Route>
       <Route path="/header" component={Header}></Route>
       <Route path="/footer" component={Footer}></Route>
     </div>
     </context.Provider>

     </BrowserRouter>
);
ReactDOM.render(
 routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
