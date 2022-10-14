import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TarjetasContext } from "../../context/TarjetasContext";
import { getUbicaciones } from "../../service";
import './Formulario.css'

const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { tarjetas, setTarjetas } = useContext(TarjetasContext);

  const onSubmit = (data) => {
    // console.log(data.latitud);
    getUbicaciones(data.latitud, data.longitud).then((resp) => {
      console.log(resp);     
      setTarjetas([
        ...tarjetas,
        { id:resp.generationtime_ms, nombre: data.nombre, latitud: data.latitud, longitud: data.longitud },
      ]); 
    });
    
  };
  return (
    <>
    <div className="Form" >
    <h1>Crear Nueva Ubicación</h1>
    </div>
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Form" >
          <label htmlFor=""> Ciudad: </label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
            })}
          />
        </div>
        <div className="Form" >
          <label htmlFor=""> Latitud: </label>
          <input
            type="text"
            {...register("latitud", {
              required: true,
            })}
          />
        </div>
        <div className="Form" >
          <label htmlFor=""> Longitud: </label>
          <input
            type="text"
            {...register("longitud", {
              required: true,
            })}
          />
        </div>
        <div  className="Form" >
                <br/>
                <input type="submit" value="Crear" />
                <input type="reset" value="Resetear" />
        </div>
      </form>
    </>
  );
};
export default Formulario;