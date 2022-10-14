import { useState } from "react";
import Tarjetas from "./Tarjetas";
import './Tarjeta.css';


const Tarjeta = ( {tarjeta} ) => {       
  console.log(tarjeta);
  const {id, nombre, latitud, longitud} = tarjeta;
  return (      
              <div className="main-container">
                    <br/>
                   <label> Ubicacion: { nombre } </label> <br/>
                   <label> Latitud: { latitud } </label><br/>
                   <label> Longitud: { longitud } </label><br/>
               
              </div>
  );
};

export default Tarjeta;