/* eslint-disable react/prop-types */


import { createContext, useEffect, useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useContext } from "react";

const GifContext = createContext();

const GifProvider = ( {children}) => {

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favorites, setFavorites] = useState([]);

    
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
    setFavorites(favorites);
  }, []);

  const addToFavorites = (id) => {
    console.log(id);
    if (favorites.includes(id)) {
      // If the item is already in favorites, remove it
      const updatedFavorites = favorites.filter((itemId) => itemId !== id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      // If the item is not in favorites, add it
      const updatedFavorites = [...favorites];
      updatedFavorites.push(id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
 
    return  <GifContext.Provider 
    value={{gf,gifs,setGifs,addToFavorites,filter,setFilter,favorites}}>
        {children}
    </GifContext.Provider>;
}

export const GifState = () => {
    return useContext(GifContext)
}

export default GifProvider;