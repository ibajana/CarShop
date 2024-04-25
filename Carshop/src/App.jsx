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
      <h2>Datos del cliente</h2>
    <Form>
      <Client></Client>
    </Form>
      
      <Vehicle />
      <Services />

    </>
  )
}

function DarkButton() {
  return (
    <button>Cambiar el tema</button>
  )
}

function Form({ children }) {
  return (
    <>
      <form action="" id='formulario'>
        {children}
      </form>

    </>
  )
}

function Client() {
  const [name, Setname] = useState("")
  const [email, Setemail] = useState("")
  const [phone, Setphone] = useState("")
  const handleSubmmit=(
  (e)=>{}
  )

  return (
    <div className='container'>
      <label>Nombre del cliente:</label>
      <input type="text" value={name} onChange={(e) => { Setname(e.target.value) }} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => { Setemail(e.target.value) }} />
        <label>Numero del cliente:
          <input type='text' value={phone} onChange={(e) => { Setphone(e.target.value) }} />
        </label>
        <button type="submit" onSubmit={handleSubmmit}>Siguiente</button>
    </div>
        
    
  )
}

function Vehicle() {
  return (
    <>
      <h2>Datos del Vehículo</h2>
      <form action="">
        <label htmlFor="">Marca:
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">Modelo:
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">Placa:
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">Nivel de Gasolina:
          <input type="text" name="" id="" />
        </label>
        <label htmlFor=""></label>
        <label htmlFor=""> Observaciones
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
      </form>
    </>
  )
}

function Services() {
  return (
    <>
      <h2>Servicios Disponibles</h2>
      <form action="">
        <div>
          <input class="form-check-input" type="checkbox" id="opcion1" value="Aceite" />
          <label for="opcion1" class="form-check-label">Cambio de Aceite</label>
        </div>
        <div>
          <input class="form-check-input" type="checkbox" id="opcion1" value="Freno" />
          <label for="opcion1" class="form-check-label">Cambio de frenos</label>
        </div>
        <div>
          <input class="form-check-input" type="checkbox" id="opcion1" value="Alineacion" />
          <label for="opcion1" class="form-check-label">Alineacion</label>
        </div>
        <div>
          <input class="form-check-input" type="checkbox" id="opcion1" value="Balanceo" />
          <label for="opcion1" class="form-check-label">Balanceo</label>
        </div>
        <div>
          <input class="form-check-input" type="checkbox" id="opcion1" value="Diagnostico" />
          <label for="opcion1" class="form-check-label">Diagnostico general</label>
        </div>
        <div>
          <input class="form-check-input" type="checkbox" id="opcion1" value="Electrico" />
          <label for="opcion1" class="form-check-label">Revision sistema electrico</label>
        </div>
        <div>
          <input class="form-check-input" type="checkbox" id="opcion1" value="Suspension" />
          <label for="opcion1" class="form-check-label">Revisión de la suspensión</label>
        </div>
      </form>
    </>
  )
}


export default App
