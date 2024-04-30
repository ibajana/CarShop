import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'


function App() {

  return (
    <>
      <Button text='Modo Oscuro' handle={handleConsole}></Button>
      <h1>RECEPCION DE AUTOS</h1>
      <hr />
      <Form>
        <Client>
        </Client>
      </Form>
    </>
  )
}

const handleConsole = () => { console.log("hola") }

function Button({ text = "I'm a button change my name with my prop (text)", handle }) {
  return (
    <button onClick={handle}>{text}</button>
  )
}



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
  const datosClient= getValues()

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
      {...register("email",{required:true,
        pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        })} />
      {errors.email?.type === "required" && (<span>El email es obligatorio</span>)}
      {errors.email?.type === "pattern" && (<span>El email introducido no es válido</span>)}


      <label>*Celular:</label>
      <input type='text' {...register("phone", { required: true })} />
      {errors.phone?.type === "required" && (<span>El celular del cliente es obligatorio</span>)}


      <label>*Identificación:</label>
      <input type='text' {...register("id",{required:true})} />
      {errors.id?.type === "required" && (<span>El Id del cliente es obligatorio</span>)}


      <Button text='Siguiente' handle={submitfunc}></Button>
    </div> :
    <Vehicle datosClient={datosClient} ></Vehicle>
  )
}

function Vehicle({datosClient}) {
  const [completeVehicle, setCompleteVehicle] = useState(true)
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const datosVehicle= getValues()

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
          <input type="text" {...register("brand",{required:true})}/>
          {errors.brand?.type==="required"&&(<span>La marca del vehiculo es obligatoria</span>)}


          <label>*Modelo:</label>
          <input type="text" {...register("model",{required:true})} />
          {errors.model?.type==="required"&&(<span>El modelo del vehiculo es obligatorio</span>)}


          <label>*Placa:</label>
          <input type="text" {...register("placa",{required:true})} />
          {errors.placa?.type==="required"&&(<span>La placa del vehiculo es obligatoria</span>)}


          <label>*Nivel de Gasolina:</label>
          <input type="text" {...register("gas",{required:true})} />
          {errors.gas?.type==="required"&&(<span>El nivel de gasolina del vehiculo es obligatorio</span>)}


          <label>Observaciones</label>
          <textarea cols="30" rows="10" {...register("observation",{maxLength:150})}></textarea>
          <Button text='Siguiente' handle={submitfunc} />
        </> :
        <Services datosClient={datosClient} datosVehicle={datosVehicle} />
      }
    </div>
  )
}

function Services({datosClient,datosVehicle}) {

  const[completeServices,setCompleteServices]=useState(true)

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
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
      <p>la marca es:{datosVehicle.brand}</p>
      <h2>Servicios Disponibles</h2>
      <input type="checkbox" {...register("oil")} />
      <label >Cambio de Aceite</label>

      <input type="checkbox" {...register("frenos")}/>
      <label >Cambio de frenos</label>
      
      <input type="checkbox" {...register("alineacion")}/>
      <label >Alineacion</label>

      <input type="checkbox" {...register("balanceo")}/>
      <label >Balanceo</label>

      <input type="checkbox" {...register("generalD")}/>
      <label >Diagnostico general</label>

      <input type="checkbox" {...register("electrico")}/>
      <label >Revision sistema electrico</label>

      <input type="checkbox" {...register("suspension")}/>
      <label >Revisión de la suspensión</label>

      <button onClick={handlePrint}>Imprimir Datos Finales</button>
    </div>:
    <FinalPrint datoServices={datoServices} datosClient={datosClient} datosVehicle={datosVehicle}/>
  )
}

function FinalPrint({datosClient,datosVehicle,datoServices}){
  
  return(
    <>
      <h2>Detalle del Registro</h2>
      <p>El nombre del cliente es:{datosClient.name}</p>
    </>
  )
}

export default App
