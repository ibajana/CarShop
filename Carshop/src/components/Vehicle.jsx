import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Services } from './Services';
import { vehicleContext } from './vehicleContext';

export function Vehicle() {
  const [completeVehicle, setCompleteVehicle] = useState(true);
  const {
    register, getValues, handleSubmit, formState: { errors }
  } = useForm();

  const datosVehicles = getValues();

  const submitfunc = handleSubmit(
    (data) => {
      console.log(data);
      setCompleteVehicle(false);
    }
  );

  return (
    <div className='container'>
      {completeVehicle ?
        <>
          <h2>Datos del Vehículo</h2>
          <label>*Marca:</label>
          <input type="text" {...register("brand", { required: true })} />
          {errors.brand?.type === "required" && (<span>La marca del vehiculo es obligatoria</span>)}


          <label>*Modelo:</label>
          <input type="text" {...register("model", { required: true })} />
          {errors.model?.type === "required" && (<span>El modelo del vehiculo es obligatorio</span>)}


          <label>*Placa:</label>
          <input type="text" {...register("placa", { required: true })} />
          {errors.placa?.type === "required" && (<span>La placa del vehiculo es obligatoria</span>)}


          <label>*Nivel de Gasolina:</label>
          <input type="text" {...register("gas", { required: true })} />
          {errors.gas?.type === "required" && (<span>El nivel de gasolina del vehiculo es obligatorio</span>)}


          <label>Observaciones</label>
          <textarea cols="30" rows="10" {...register("observation", { maxLength: 150 })}></textarea>
          <button onClick={submitfunc}>Siguiente</button>
        </>
        :
        <>
          <vehicleContext.Provider value={datosVehicles}>
            <Services></Services>
          </vehicleContext.Provider>
        </>}
    </div>
  );
}
