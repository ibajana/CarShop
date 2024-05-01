
import { useContext } from 'react';
import { clientContext }from './clientContext'
import { vehicleContext } from './vehicleContext';
import { serviceContext } from './serviceContext';





export function FinalPrint() {
  const datosClient = useContext(clientContext);
  const datosVehicle = useContext(vehicleContext)
  const datosServices = useContext(serviceContext)
  const trueServices = Object.entries(datosServices)
  .filter(([key, value]) => value === true)
  .map(([key]) => key);

  return (
    <>
      <h2>Detalle del Registro</h2>
      <p>El nombre del cliente es: {datosClient.name}</p>
      <p>El modelo del vehiculo es: {datosVehicle.brand}</p>
      <p>Servicios a realizar:</p>
      {trueServices.map((service)=><ul><li>{service}</li></ul>)}
      
    </>
  );
}
