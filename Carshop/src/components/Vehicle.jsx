import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Services } from './Services';
import { vehicleContext } from './vehicleContext';
import { Button, FormControl, FormGroup, FormLabel, FormText, InputGroup } from 'react-bootstrap';

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
    
      completeVehicle ?
      
        <>
          <h2 className='fw-bold'>Datos del Vehículo</h2>
          <FormGroup>
            <FormLabel>*Marca:</FormLabel>
            <FormControl type="text" {...register("brand", { required: true })} />
            {errors.brand?.type === "required" && (<FormText>La marca del vehiculo es obligatoria</FormText>)}
          </FormGroup>
          <FormGroup>
            <FormLabel>*Modelo:</FormLabel>
            <FormControl type="text" {...register("model", { required: true })} />
            {errors.model?.type === "required" && (<FormText>El modelo del vehiculo es obligatorio</FormText>)}
          </FormGroup>
          <FormGroup>
            <FormLabel>*Placa:</FormLabel>
            <FormControl type="text" {...register("placa", { required: true })} />
            {errors.placa?.type === "required" && (<FormText>La placa del vehiculo es obligatoria</FormText>)}
          </FormGroup>
          <FormGroup>
            <FormLabel>*Nivel de Gasolina:</FormLabel>
            <FormControl type="text" {...register("gas", { required: true })} />
            {errors.gas?.type === "required" && (<FormText>El nivel de gasolina del vehiculo es obligatorio</FormText>)}
          </FormGroup>
          <InputGroup>
            <FormLabel className='pe-2'>Observaciones</FormLabel>
            <FormControl as="textarea" {...register("observation", { maxLength: 150 })}></FormControl>
          </InputGroup>
          <Button variant="secondary" size="lg" onClick={submitfunc}>Siguiente</Button>
        </>
      
        :
        <>
          <vehicleContext.Provider value={datosVehicles}>
            <Services></Services>
          </vehicleContext.Provider>
        </>
    
  );
}
