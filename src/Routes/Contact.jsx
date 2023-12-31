import React from 'react'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="form-text">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default Contact