import Tarjeta from './Tarjeta';
import './Tarjetas.css';


const Tarjetas = ( { tarjetas } ) => {   
/* console.log(tarjetas); */
  return (
        <div className='grid' >
                {tarjetas.map((tarjeta) => (
                  <Tarjeta  key={tarjeta.id} tarjeta={tarjeta} />
                ))}
        </div>
  )
}
export default Tarjetas;