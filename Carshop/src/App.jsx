import React from 'react'
import { useState, useContext } from 'react'
import { useForm } from "react-hook-form"
import './App.css'



function App() {

  return (
    <>
      <button >Modo Oscuro</button>
      <h1>RECEPCION DE AUTOS</h1>
      <hr />
      <Form>
        <Client>
        </Client>
      </Form>
    </>
  )
}



// eslint-disable-next-line react/prop-types
function Form({ children }) {

  return (
    <>
      <h6>Los campos señalados con (*) son OBLIGATORIOS</h6>
      <form id='formulario'>
        {children}
      </form>
    </>
  )
}


const clientContext = React.createContext();

function Client() {

  const [complete, setComplete] = useState(true)
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm()

  /*const name=getValues("name")
  const phone=getValues("phone")
  const email=getValues("email")
  const id=getValues("id")*/
  const datosClient = getValues()

  const submitfunc = handleSubmit(
    (data) => {
      console.log(data)
      setComplete(false)
    }
  )

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
      <input type='text' {...register("phone", { required: true })} />
      {errors.phone?.type === "required" && (<span>El celular del cliente es obligatorio</span>)}


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

  )
}

const vehicleContext = React.createContext();

function Vehicle() {
  const [completeVehicle, setCompleteVehicle] = useState(true)
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const datosVehicles = getValues()

  const submitfunc = handleSubmit(
    (data) => {
      console.log(data)
      setCompleteVehicle(false)
    }
  )

  return (
    <div className='container' >
      {completeVehicle ?
        <>
          <h2>Datos del Vehículo</h2>
          <label >*Marca:</label>
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
        </>
      }
    </div>
  )
}

const serviceContext = React.createContext()

function Services() {

  const [completeServices, setCompleteServices] = useState(true)

  const {
    register,
    getValues,
    handleSubmit,
  } = useForm()

  const datoServices = getValues()

  const handlePrint = handleSubmit(
    (data) => {
      console.log(data)
      setCompleteServices(false)
    }
  )

  return (completeServices?
    <div>
      <h2>Servicios Disponibles</h2>
      <input type="checkbox" {...register("oil")} />
      <label >Cambio de Aceite</label>

      <input type="checkbox" {...register("frenos")} />
      <label >Cambio de frenos</label>

      <input type="checkbox" {...register("alineacion")} />
      <label >Alineacion</label>

      <input type="checkbox" {...register("balanceo")} />
      <label >Balanceo</label>

      <input type="checkbox" {...register("generalD")} />
      <label >Diagnostico general</label>

      <input type="checkbox" {...register("electrico")} />
      <label >Revision sistema electrico</label>

      <input type="checkbox" {...register("suspension")} />
      <label >Revisión de la suspensión</label>

      <button onClick={handlePrint}>Imprimir Datos Finales</button>
    </div> :
    <>
      <serviceContext.Provider value={datoServices}>
        <FinalPrint />
      </serviceContext.Provider>
    </>
  
  )
}

function FinalPrint() {
  const datosClient = useContext(clientContext)
  /*const datosVehicle = useContext(vehicleContext)
  const datosServices = useContext(serviceContext)*/
  return (
    <>
      <h2>Detalle del Registro</h2>
      <p>El nombre del cliente es: {datosClient.name}</p>
    </>
  )
}

export default App
