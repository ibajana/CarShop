import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
      <DarkButton></DarkButton>
      <h1>RECEPCION DE AUTOS</h1>
      <hr />
      
      <Form>
        <Client>
        </Client>
      </Form>
    </>
  )
}

function DarkButton() {
  return (
    <button>Cambiar el tema</button>
  )
}



function Form({ children }) {
  const [complete,setcomplete]=useState(false)
  const handleComplete = ()=>{
    setcomplete(true)
  }
  return (
    <>
      <form id='formulario' handleComplete={handleComplete}>
        {children}
      </form>
    </>
  )
}

function Client() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("evitando el submit")
  }
  const [name, Setname] = useState("")
  const [email, Setemail] = useState("")
  const [phone, Setphone] = useState("")

  return (
    <div className='container'>
      <h2>Datos del cliente</h2>
      <label>Nombre del cliente:</label>
      <input type="text" value={name} onChange={(e) => { Setname(e.target.value) }} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => { Setemail(e.target.value) }} />
      <label>Numero del cliente:</label>
      <input type='text' value={phone} onChange={(e) => { Setphone(e.target.value) }} />
      <button type="submit" onClick={handleSubmit}>Siguiente</button>
    </div>
  )
}

function Vehicle() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("evitando el submit")
  }
  return (
    <div className='container' >
      <h2>Datos del Vehículo</h2>
      <label >Marca:</label>
      <input type="text" />
      <label>Modelo:</label>
      <input type="text" />
      <label >Placa:</label>
      <input type="text" />
      <label >Nivel de Gasolina:</label>
      <input type="text" />
      <label > Observaciones</label>
      <textarea cols="30" rows="10"></textarea>
      <button type="submit" onClick={handleSubmit}>Siguiente</button>
    </div>
  )
}

function Services() {
  return (
    <div>
      <h2>Servicios Disponibles</h2>
        <div>
          <input type="checkbox" value="Aceite" />
          <label >Cambio de Aceite</label>
          
        </div>
        <div>
          <input type="checkbox" value="Freno" />
          <label >Cambio de frenos</label>
        </div>
        <div>
          <input type="checkbox" value="Alineacion" />
          <label >Alineacion</label>
        </div>
        <div>
          <input type="checkbox" value="Balanceo" />
          <label >Balanceo</label>
        </div>
        <div>
          <input type="checkbox" value="Diagnostico" />
          <label >Diagnostico general</label>
        </div>
        <div>
          <input type="checkbox" value="Electrico" />
          <label >Revision sistema electrico</label>
        </div>
        <div>
          <input type="checkbox" value="Suspension" />
          <label >Revisión de la suspensión</label>
        </div>
    </div>
  )
}


export default App
