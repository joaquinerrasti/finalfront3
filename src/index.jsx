import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { GlobalContextProvider }  from './Components/utils/global.context'
import './Stylesheet/App.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter><GlobalContextProvider>
        <Routes>
          <Route  path="/" element={<App />} />
          <Route  path="home" element={<Home />} />
          <Route  path="detail/:id" element={<Detail />} />
          <Route  path="contact" element={<Contact />} />
          <Route  path="favs" element={<Favs />} />
        </Routes>
        </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


