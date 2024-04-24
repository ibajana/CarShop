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
      <Client />

    </>
  )
}

function DarkButton() {
  return (
    <button>Cambiar el tema</button>
  )
}

function Client() {
  const [name, Setname] = useState("")
  const [email, Setemail] = useState("")
  const [phone, Setphone] = useState("")
  return (
    <>
      <form action="">
        <label>Nombre del cliente:
          <input type="text" value={name} onChange={(e) => { Setname(e.target.value) }} />
        </label>
        <label>Email:
          <input type="text" value={email} onChange={(e) => { Setemail(e.target.value) }} />
        </label>
        <label>Nombre del cliente:
          <input type="text" value={phone} onChange={(e) => { Setphone(e.target.value) }} />
        </label>
      </form>
      <h2>Su nombre es: {name} </h2>
      <h2>Su email es: {email} </h2>
      <h2>Su numero de telefono es: {phone} </h2>
    </>
  )
}

export default App
