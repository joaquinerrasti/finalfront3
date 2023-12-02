import { createContext, useEffect, useState } from "react";

export const ContextGlobal = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    const fetchDentists = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setDentists(data);
    };

    fetchDentists();
  }, []);

  const addToFavorites = (dentist) => {
    const existingDentist = favorites.find((d) => d.id === dentist.id);

    if (!existingDentist) {
      setFavorites([...favorites, dentist]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, dentist])
      );
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((d) => d.id !== id));
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((d) => d.id !== id))
    );
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <ContextGlobal.Provider
      value={{ dentists, favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};