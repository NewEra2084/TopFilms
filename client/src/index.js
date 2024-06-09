import React, {createContext} from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import UserStorage  from './storage/UserStorage'
import FilmStorage from "./storage/FilmStorage"; 
import DarkMode from './utils/DarkMode';
import './style.css';
import Favorite from './utils/FavoriteHandler';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL);

root.render(
    <Context.Provider value={{
        user: new UserStorage(),
        film: new FilmStorage(),
        darkMode: new DarkMode(),
        favorite: new Favorite(),
    }}>
        <App />
    </Context.Provider>,
);