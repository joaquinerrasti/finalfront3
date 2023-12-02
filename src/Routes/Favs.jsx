import React, { useContext } from 'react';
// import Card from '../Components/Card'
import Navbar from '../Components/Navbar';
import { ContextGlobal } from '../Components/utils/global.context';
import Footer from '../Components/Footer';


const Favs = () => {
  const { favorites, removeFromFavs, clearFavs } = useContext(ContextGlobal);

  const handleRemoveClick = (id) => {
    removeFromFavs(id);
  };

  const handleClearClick = () => {
    clearFavs();
  };


  return (
    <>
      <Navbar />
      <div className="favs">
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          favorites.map((d) => (
            <div key={d.id} className="favs-item">
              <h3>{d.name}</h3>
              <p>{d.email}</p>
              <p>{d.phone}</p>
              <button onClick={() => handleRemoveClick(d.id)}>
                Remove from favorites
              </button>
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
        <button onClick={handleClearClick}>Clear favorites</button>
      </div>
      <Footer/>
    </>
  );
};

export default Favs;
