

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Vehicle } from './Vehicle';
import { clientContext } from './clientContext';

export function Client() {
  const [complete, setComplete] = useState(true);
  const {
    register, getValues, handleSubmit, formState: { errors }
  } = useForm();

  const datosClient = getValues();

  const submitfunc = handleSubmit(
    (data) => {
      console.log(data);
      setComplete(false);
    }
  );

  return (complete ?
    <div className='container'>
      <h2>Datos del cliente</h2>

      <label>*Nombre del cliente:</label>
      <input type="text" autoComplete='off' {...register("name", { required: true, minLength: 2 })} />
      {errors.name?.type === "required" && (<span>El nombre del cliente es obligatorio</span>)}
      {errors.name?.type === "minLength" && (<span>El nombre debe tener al menos dos caracteres</span>)}

      <label>*Email:</label>
      <input type="email" autoComplete='off'
        {...register("email", {
          required: true,
          pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        })} />
      {errors.email?.type === "required" && (<span>El email es obligatorio</span>)}
      {errors.email?.type === "pattern" && (<span>El email introducido no es válido</span>)}


      <label>*Celular:</label>
      <input type='text' {...register("phone", { required: true,pattern: /^\+?[0-9]{10,15}$/ })} />
      {errors.phone?.type === "required" && (<span>El celular del cliente es obligatorio</span>)}
      {errors.phone?.type === "pattern" && (<span>El numero introducido no es válido</span>)}


      <label>*Identificación:</label>
      <input type='text' {...register("id", { required: true })} />
      {errors.id?.type === "required" && (<span>El Id del cliente es obligatorio</span>)}


      <button onClick={submitfunc}>Siguiente</button>
    </div> :
    <>
      <clientContext.Provider value={datosClient}>
        <Vehicle></Vehicle>
      </clientContext.Provider>
    </>

  );
}
