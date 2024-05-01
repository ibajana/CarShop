import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FinalPrint } from './FinalPrint';
import { serviceContext } from './serviceContext';

export function Services() {

  const [completeServices, setCompleteServices] = useState(true);

  const {
    register, getValues, handleSubmit,
  } = useForm();

  const datoServices = getValues();

  const handlePrint = handleSubmit(
    (data) => {
      console.log(data);
      setCompleteServices(false);
    }
  );

  return (completeServices ?
    <div>
      <h2>Servicios Disponibles</h2>
      <input type="checkbox" {...register("oil")} />
      <label>Cambio de Aceite</label>

      <input type="checkbox" {...register("frenos")} />
      <label>Cambio de frenos</label>

      <input type="checkbox" {...register("alineacion")} />
      <label>Alineacion</label>

      <input type="checkbox" {...register("balanceo")} />
      <label>Balanceo</label>

      <input type="checkbox" {...register("generalD")} />
      <label>Diagnostico general</label>

      <input type="checkbox" {...register("electrico")} />
      <label>Revision sistema electrico</label>

      <input type="checkbox" {...register("suspension")} />
      <label>Revisión de la suspensión</label>

      <button onClick={handlePrint}>Imprimir Datos Finales</button>
    </div> :
    <>
      <serviceContext.Provider value={datoServices}>
        <FinalPrint />
      </serviceContext.Provider>
    </>

  );
}
