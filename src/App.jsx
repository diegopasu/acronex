import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoMaquinas from './components/ListadoMaquinas'

import { MaquinasProvider } from './context/MaquinasProvider'
import { DetalleProvider } from './context/DetalleProvider'

function App() {
  
  return (
    <MaquinasProvider> 
      <DetalleProvider>
      <header className="py-5">
      <h1> Unimap </h1>
      </header>
      
      <Container className='mt-5'>
        
        <Formulario />
        <ListadoMaquinas>
          
        </ListadoMaquinas>


      </Container>
      
      </DetalleProvider>

    </MaquinasProvider>
    
  )

}

export default App
