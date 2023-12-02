import { useParams } from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context';
import { useContext } from 'react';
import Navbar from '../Components/Navbar';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { id }= useParams();
  const{dentist}= useContext(ContextGlobal);
  const currentDentist= dentist.find(dentist => dentist.id === parseInt(id));
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <Navbar />
      <h1>
        Dentist id {currentDentist?.id} - {currentDentist?.name}
      </h1>
      {currentDentist && (
        <div className="details">
          <h3> Name :</h3>
          <h2>{currentDentist.name}</h2>
          <h3> Email :</h3>
          <h2>{currentDentist.email}</h2>
          <h3> Phone :</h3>
          <h2>{currentDentist.phone}</h2>
          <h3> Website :</h3>
          <h2>{currentDentist.website}</h2>
        </div>
      )}
    </>
  );
}

export default Detail;