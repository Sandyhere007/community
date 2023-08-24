import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

export const server = "https://community-ymkm.onrender.com";
// export const server = "http://localhost:4000";



export const Context = createContext({ isAuthenticated : false}) ;

const AppWrapper= () =>{
  const [isAuthenticated , setIsAuthenticated] = useState(false);
  const [admin   , setAdmin] = useState(false);
  const [loading  , setLoading] = useState(false);
  const [user  , setUser] = useState({});

  return (
  <Context.Provider value={{isAuthenticated , setIsAuthenticated , loading  , setLoading, user ,  setUser ,admin , setAdmin}}>
    <App/>
  </Context.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

