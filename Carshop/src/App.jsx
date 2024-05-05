import './App.css'
import { Myform } from './components/Form'
import { Client} from './components/Client'
import { Button } from 'react-bootstrap'



function App() {

  return (
    <>
      <h1 className='display-1 text-center fw-bolder'>RECEPCION DE AUTOS</h1>
      <hr />
      <Myform>
        <Client>
        </Client>
      </Myform>
    </>
  )
}


export default App
