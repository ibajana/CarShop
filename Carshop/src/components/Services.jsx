import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FinalPrint } from './FinalPrint';
import { serviceContext } from './serviceContext';
import { Button, FormControl, FormGroup, FormLabel, FormText, Form } from 'react-bootstrap';



export function Services() {

  const [completeServices, setCompleteServices] = useState(true);

  const {
    register, getValues, handleSubmit,
  } = useForm();

  const datoServices = getValues();

  const handlePrint = handleSubmit(
    (data) => {
      
      setCompleteServices(false);
    }
  );

  return (completeServices ?
    <>
      <h2 className='fw-bold'>Servicios Disponibles</h2>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Cambio de Aceite" {...register("Cambio de Aceite")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Cambio de Frenos" {...register("Cambio de Frenos")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Alineacion" {...register("Alineacion")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Balanceo" {...register("Balanceo")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Diagnostico General" {...register("Diagnostico General")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Revision del Sistema Electrico" {...register("Revision del Sistema Electrico")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Revisión de Suspensión" {...register("Revisión de Suspensión")} />
      </Form.Group>

      <Button className='col-12' variant="secondary" size="lg" onClick={handlePrint}>Imprimir Datos Finales</Button>

    </>
    :
    <>
      <serviceContext.Provider value={datoServices}>
        <FinalPrint />
      </serviceContext.Provider>
    </>

  );
}
