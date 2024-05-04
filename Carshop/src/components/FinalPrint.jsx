
import { useContext } from 'react';
import { clientContext } from './clientContext'
import { vehicleContext } from './vehicleContext';
import { serviceContext } from './serviceContext';
import { Button, Table } from 'react-bootstrap';





export function FinalPrint() {
  const datosClient = useContext(clientContext);
  const datosVehicle = useContext(vehicleContext);
  const datosServices = useContext(serviceContext);
  const trueServices = Object.entries(datosServices)
    .filter(([key, value]) => value === true)
    .map(([key]) => key);
  
  const fechaActual = new Date();


  return (
    <>
      <h1 className='fw-bold'>DETALLE DEL REGISTRO</h1>
      <h2 className='fw-bold'>Datos del Cliente</h2>
      <Table className='text-center' bordered>
        <tbody>
          <tr>
            <td className='col-6'>Cliente</td>
            <td className='col-6'>{datosClient.name}</td>
          </tr>
          <tr>
            <td>Celular</td>
            <td>{datosClient.phone}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{datosClient.email}</td>
          </tr>
          <tr>
            <td>{datosClient.idType}</td>
            <td>{datosClient.id}</td>
          </tr>
        </tbody>
      </Table>
      <h2 className='fw-bold'>Datos del Vehiculo</h2>
      <Table className='text-center'>
        <tbody>
          <tr>
            <td className='col-6'>Marca</td>
            <td className='col-6'>{datosVehicle.brand}</td>
          </tr>
          <tr>
            <td className='col-6'>Modelo</td>
            <td className='col-6'>{datosVehicle.model}</td>
          </tr>
          <tr>
            <td className='col-6'>Placa</td>
            <td className='col-6'>{datosVehicle.placa}</td>
          </tr>
          <tr>
            <td className='col-6'>Nivel de Gasolina</td>
            <td className='col-6'>{datosVehicle.gas}</td>
          </tr>
          <tr>
            <td className='col-6'>Observaciones</td>
            <td className='col-6'>{datosVehicle.observation}</td>
          </tr>
        </tbody>
      </Table>
      <h2 className='fw-bold'>Servicios a Realizar</h2>
      {trueServices.map((service) => <p>{service}</p>)}
      <p>Hora de registro {fechaActual.toDateString()}</p>
      <Button className='col-12 mt-2' variant="secondary" size="lg">Confirmar Registro</Button>
    </>
  );
}
