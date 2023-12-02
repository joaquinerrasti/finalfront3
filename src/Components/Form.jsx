import React from "react";
import {useState} from "react";
import '../Stylesheet/Form.css'
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setemailError] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const validName = (name) => {
    if(name.length < 5){
      setNameError('El nombre debe ser de al menos 5 caracteres');
    }else{
      setNameError('');
    }
  };

  const validEmail = (email) => {
    const regex =/^\S+@\S+\.\S+$/;
    if(!regex.test(email)){
      setemailError('El correo es incorrecto');
    }else{
      setemailError('');
    }
  };

  const onSubmit = (event)=> {
    event.preventDefault();
    setShowMessage(true);
  };

  const onChangeName = (event) =>{
    setName(event.target.value);
    validName(event.target.value);
  };

  const onChangeEmail = (event) =>{
    setEmail(event.target.value);
    validEmail(event.target.value);
  };
  const message = () => (
    <div>Muchas gracias {name}, el correo {email} ha quedado registrado.</div>
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
          Nombre:
          <input type="text" value={name} onChange={onChangeName} />
          </label>
          {nameError && <div className ="error">{nameError}</div>}
        </div>
        <div>
          <label>
          Email:
          <input type="email" value={email} onChange={onChangeEmail} />
          </label>
          {emailError && <div className ="error">{emailError}</div>}
        </div>
        <button type="submit" onSubmit={message}>Agendar</button>
        <div className="error">{showMessage && message()}</div>
      </form>
    </div>
  );
};

export default Form;
