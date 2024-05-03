
import { useContext } from 'react';
import { clientContext }from './clientContext'
import { vehicleContext } from './vehicleContext';
import { serviceContext } from './serviceContext';
import { Button } from 'react-bootstrap';





export function FinalPrint() {
  const datosClient = useContext(clientContext);
  const datosVehicle = useContext(vehicleContext)
  const datosServices = useContext(serviceContext)
  const trueServices = Object.entries(datosServices)
  .filter(([key, value]) => value === true)
  .map(([key]) => key);

  return (
    <>
      <h1 className='fw-bold'>DETALLE DEL REGISTRO</h1>
      <h2>Datos del Cliente</h2>
      <p>Cliente: {datosClient.name}</p>
      <p>Celular {datosClient.phone}</p>
      <p>Correo: {datosClient.email}</p>
      <p>Identificacion: {datosClient.idType} #{datosClient.id}</p>
      <h2 className='fw-bold'>Vehiculo: {datosVehicle.name}</h2>

      <p>El modelo del vehiculo es: {datosVehicle.brand}</p>
      <p>Servicios a realizar:</p>
      {trueServices.map((service)=><ul><li>{service}</li></ul>)}
      <Button>Confirmar Registro</Button>
    </>
  );
}
