

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Vehicle } from './Vehicle';
import { clientContext } from './clientContext';
import { Form, Button, FormGroup, FormLabel, FormControl, InputGroup } from 'react-bootstrap';

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
    <>
        <h2 className='fw-bold'>Datos del cliente</h2>
        <FormGroup>
          <FormLabel className='fw-bold'>*Nombre del cliente:</FormLabel>
          <FormControl className="shadow-sm p-2 bg-body-tertiary rounded" type="text" autoComplete='off' {...register("name", { required: true, minLength: 2 })} />
          {errors.name?.type === "required" && (<Form.Text>El nombre del cliente es obligatorio</Form.Text>)}
          {errors.name?.type === "minLength" && (<Form.Text>El nombre debe tener al menos dos caracteres</Form.Text>)}
        </FormGroup>
        <FormGroup>
          <FormLabel>*Email:</FormLabel>
          <FormControl className="shadow-sm p-2 bg-body-tertiary rounded" type="email" autoComplete='off'
            {...register("email", {
              required: true,
              pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
            })} />
          {errors.email?.type === "required" && (<Form.Text>El email es obligatorio</Form.Text>)}
          {errors.email?.type === "pattern" && (<Form.Text>El email introducido no es válido</Form.Text>)}
        </FormGroup>
        <FormGroup>
          <FormLabel>*Celular:</FormLabel>
          <FormControl className="shadow-sm p-2 bg-body-tertiary rounded" type='text' {...register("phone", { required: true, pattern: /^\+?[0-9]{10,15}$/ })} />
          {errors.phone?.type === "required" && (<Form.Text>El celular del cliente es obligatorio</Form.Text>)}
          {errors.phone?.type === "pattern" && (<Form.Text>El numero introducido no es válido</Form.Text>)}
        </FormGroup>
        <FormLabel>*Identificación</FormLabel>
        <InputGroup>
          <Form.Select{...register("idType")}>
            <option value="Cédula">Cédula</option>
            <option value="ruc">RUC</option>
            <option value="pasaporte">Pasaporte</option>
          </Form.Select>
          <FormControl className="shadow-sm p-2 bg-body-tertiary rounded" type='text' {...register("id", { required: true, pattern: /^(?:[0-9]{10}|[A-Za-z]{1}[0-9]{6}|[0-9]{13})$/ })} />
          {errors.id?.type === "required" && (<Form.Text>El Id del cliente es obligatorio</Form.Text>)}
          {errors.id?.type === "pattern" && (<Form.Text>El número de identificación no es válido</Form.Text>)}
        </InputGroup>
        <Button className='col-12 mt-2' variant="secondary" size="lg" onClick={submitfunc}>Siguiente</Button>
    </> :
    <>
      <clientContext.Provider value={datosClient}>
        <Vehicle></Vehicle>
      </clientContext.Provider>
    </>

  );
}
