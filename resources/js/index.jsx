import React from 'react';
import { createRoot } from 'react-dom/client';
import Pokedex from './components/pokedex';
if(document.getElementById('Pokedex')){
    createRoot(document.getElementById('Pokedex')).render(<Pokedex />)
}