import './App.css'
import { Myform } from './components/Form'
import { Client} from './components/Client'
import { Button } from 'react-bootstrap';



function App() {

  return (
    <>
      <Button>Modo Oscuro</Button>
      <h1>RECEPCION DE AUTOS</h1>
      <hr />
      <Myform>
        <Client>
        </Client>
      </Myform>
    </>
  )
}


export default App
