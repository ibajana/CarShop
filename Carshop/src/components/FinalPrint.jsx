
import { useContext, useReducer , useEffect} from 'react';
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
  

  function confirmarAccion() {
    const confirmacion = window.confirm('Desea confirmar el registro?');
    if (confirmacion) {
      
      alert('Su registro se realizo con exito')
      window.location.reload()
    } else {
      alert('El registro se canceló')
      window.location.reload()
    }
  }
  

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ARRAY_LENGTH_1':
        
        const newTime = new Date(state.currentTime);
        newTime.setHours(newTime.getHours() + 1);
        return { ...state, currentTime: newTime.toString() };
      case 'ARRAY_LENGTH_2':
        
        const newTime2 = new Date(state.currentTime);
        newTime2.setHours(newTime2.getHours() + 2);
        return { ...state, currentTime: newTime2.toString() };
      case 'ARRAY_LENGTH_3':
        
        const newTime3 = new Date(state.currentTime);
        newTime3.setHours(newTime3.getHours() + 3);
        return { ...state, currentTime: newTime3.toString() };
      case 'ARRAY_LENGTH_4':
        
        const newTime4 = new Date(state.currentTime);
        newTime4.setHours(newTime4.getHours() + 4);
        return { ...state, currentTime: newTime4.toString() };
      case 'ARRAY_LENGTH_5':
        
        const newTime5 = new Date(state.currentTime);
        newTime5.setHours(newTime5.getHours() + 5);
        return { ...state, currentTime: newTime5.toString() };
      case 'ARRAY_LENGTH_6':
        
        const newTime6 = new Date(state.currentTime);
        newTime6.setHours(newTime6.getHours() + 6);
        return { ...state, currentTime: newTime6.toString() };
      case 'ARRAY_LENGTH_7':
        
        const newTime7 = new Date(state.currentTime);
        newTime7.setHours(newTime7.getHours() + 7);
        return { ...state, currentTime: newTime7.toString() };
      default:
        return state;
    }
  };

  const initialState = {
    currentTime: new Date().toString(),
    myArray: trueServices, 
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.myArray.length === 1) {
      dispatch({ type: 'ARRAY_LENGTH_1' });
    } 
    else if (state.myArray.length === 2) {
      dispatch({ type: 'ARRAY_LENGTH_2' });
    }
    else if (state.myArray.length === 3) {
      dispatch({ type: 'ARRAY_LENGTH_3' });
    }
    else if (state.myArray.length === 4) {
      dispatch({ type: 'ARRAY_LENGTH_4' });
    }
    else if (state.myArray.length === 5) {
      dispatch({ type: 'ARRAY_LENGTH_5' });
    }
    else if (state.myArray.length === 6) {
      dispatch({ type: 'ARRAY_LENGTH_6' });
    }
    else if (state.myArray.length === 7) {
      dispatch({ type: 'ARRAY_LENGTH_7' });
    }
  }, [state.myArray]);
  

  return (
    <>
      <h1 className='fw-bold'>DETALLE DEL REGISTRO</h1>
      <h2 className='fw-bold'>Datos del Cliente</h2>
      <Table className='text-center' bordered striped>
        <tbody>
          <tr>
            <td className='col-6 fw-bold'>Cliente</td>
            <td className='col-6'>{datosClient.name}</td>
          </tr>
          <tr>
            <td className='col-6 fw-bold'>Celular</td>
            <td className='col-6'>{datosClient.phone}</td>
          </tr>
          <tr>
            <td className='col-6 fw-bold'>Email</td>
            <td className='col-6'>{datosClient.email}</td>
          </tr>
          <tr>
            <td className='col-6 fw-bold'>{datosClient.idType}</td>
            <td className='col-6'>{datosClient.id}</td>
          </tr>
        </tbody>
      </Table>
      <h2 className='fw-bold'>Datos del Vehiculo</h2>
      <Table className='text-center' bordered striped>
        <tbody>
          <tr>
            <td className='col-6 fw-bold'>Marca</td>
            <td className='col-6'>{datosVehicle.brand}</td>
          </tr>
          <tr>
            <td className='col-6 fw-bold'>Modelo</td>
            <td className='col-6'>{datosVehicle.model}</td>
          </tr>
          <tr>
            <td className='col-6 fw-bold'>Placa</td>
            <td className='col-6'>{datosVehicle.placa}</td>
          </tr>
          <tr>
            <td className='col-6 fw-bold'>Nivel de Gasolina</td>
            <td className='col-6'>{datosVehicle.gas}</td>
          </tr>
          <tr>
            <td className='col-6 fw-bold'>Observaciones</td>
            <td className='col-6'>{datosVehicle.observation}</td>
          </tr>
        </tbody>
      </Table>
      <h2 className='fw-bold'>Servicios a Realizar</h2>
      {trueServices.map((service) => <p className='text-center'>{service}</p>)}
      <p className='fw-bold'>Hora de registro:</p>
      <p>{fechaActual.toString()}</p>
      <p className='fw-bold'>Hora Estimada de Entrega: </p>
      <p>{state.currentTime}</p>
      <Button className='col-12 mt-2' variant="secondary" size="lg" onClick={confirmarAccion}>Confirmar Registro</Button>
    </>
  );
}
