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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const submitfunc = handleSubmit(
    (data)=>{console.log(data)
      setComplete(false)
    }
  )

  return (complete?
    <div className='container'>

      <h2>Datos del cliente</h2>
      <label>Nombre del cliente:</label>
      <input type="text" autoComplete='off' {...register("name", {required:true, minLength: 2})} />
      <label>Email:</label>
      <input type="email" autoComplete='off' {...register("email")} />
      <label>Celular:</label>
      <input type='text' {...register("phone",{required:true})}/>
      <label>Identificación:</label>
      <input type='text' {...register("id")}/>
      <Button text='Siguiente' handle={submitfunc}></Button>
    </div>:
    <Vehicle></Vehicle>
  )
}

function Vehicle({ name, email, phone }) {
  const [completeVehicle, setCompleteVehicle] = useState(true)
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [placa, setPlaca] = useState("")
  const [gas, setGas] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(brand)
    setCompleteVehicle(false)
  }

  return (
    <div className='container' >
      {completeVehicle ?
        <>
          <h2>Datos del Vehículo</h2>
          <label >Marca:</label>
          <input type="text" value={brand} onChange={(e) => { setBrand(e.target.value) }} />
          <label>Modelo:</label>
          <input type="text" value={model} onChange={(e) => { setModel(e.target.value) }} />
          <label >Placa:</label>
          <input type="text" value={placa} onChange={(e) => { setPlaca(e.target.value) }} />
          <label >Nivel de Gasolina:</label>
          <input type="text" value={gas} onChange={(e) => { setGas(e.target.value) }} />
          <label > Observaciones</label>
          <textarea cols="30" rows="10"></textarea>
          <Button text='Siguiente' handle={handleSubmit} />
        </> :
        <Services name={name} email={email} phone={phone} />
      }
    </div>
  )
}

function Services() {
  const handlePrint = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Servicios Disponibles</h2>
      <input type="checkbox" value="Aceite" />
      <label >Cambio de Aceite</label>
      <input type="checkbox" value="Freno" />
      <label >Cambio de frenos</label>
      <input type="checkbox" value="Alineacion" />
      <label >Alineacion</label>
      <input type="checkbox" value="Balanceo" />
      <label >Balanceo</label>
      <input type="checkbox" value="Diagnostico" />
      <label >Diagnostico general</label>
      <input type="checkbox" value="Electrico" />
      <label >Revision sistema electrico</label>
      <input type="checkbox" value="Suspension" />
      <label >Revisión de la suspensión</label>
      <button onClick={handlePrint}>Imprimir Datos Finales</button>
    </div>
  )
}


export default App
