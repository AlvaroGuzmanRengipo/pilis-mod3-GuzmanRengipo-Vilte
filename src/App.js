import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Tarjetas from './componentes/Tarjeta/Tarjetas';
import { TarjetasContext } from './context/TarjetasContext';

const data = [
  {
    nombre: 'San Salvador de Jujuy',
    latitud: '-24.2051671',
    longitud: '-65.3755962',
  }
]

function App() {
  const [tarjetas, setTarjetas] = useState(data);

  return (
    <div className='App'>
           <TarjetasContext.Provider value={{ tarjetas, setTarjetas }}>
                <Formulario />
                <h1 className='Lista'>Lista de Ubicaciones</h1> <br/>
                <Tarjetas tarjetas= {tarjetas} />
           </TarjetasContext.Provider>
    </div>
  );
}

export default App;
