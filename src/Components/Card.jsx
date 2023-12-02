import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ dentist }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(ContextGlobal);

  const isFavorite = favorites.some((d) => d.id === dentist.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(dentist.id);
    } else {
      addToFavorites(dentist);
    }
  };

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt='doctor' />
      <div>
        <h2>{dentist.name}</h2>
        <p>{dentist.email}</p>
        <p>{dentist.phone}</p>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
};

export default Card;