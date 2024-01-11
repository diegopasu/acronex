import { useState } from 'react'
import { Button,Form,Row,Col,Alert  } from "react-bootstrap"
import useMaquinas from '../hooks/useMaquinas'
import useDetalle from '../hooks/useDetalle'

//<option>- Selecciona Maquina -</option> 

const Formulario = () => {
    
  const [busqueda, setBusqueda] = useState({
    nombre: ''
   })
    
    const [alerta, setAlerta] = useState('')
    const { consultarMaquina } = useDetalle()

    const handleSubmit = e => {
      e.preventDefault()
      if(Object.values(busqueda).includes('')) {
          setAlerta('El campo maquina es obligatorio')
          return
      }
      setAlerta('')
      consultarMaquina(busqueda)

  }

    const { maquinas } = useMaquinas()
    //const { maquinas1 } = useMaquinas1()
    
    return(
        <Form
        onSubmit={handleSubmit}
        >

           {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}

            <Row>
            <Col md={6}>
             
             <Form.Group className="mb-3">

               <Form.Label htmlFor="nombre"> Nombre Maquina:</Form.Label>
               <Form.Control
                id="nombre"
                type="text"
                placeholder="Ej: Maquina de ..."
                name="nombre"
                value={busqueda.nombre}

                onChange={e => setBusqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                })}

               />

               
                <Col md={3}>
                    
                    <Button
                        variant='primary'
                        className='text-uppercase w-100'
                        type="submit"
                    >
                        Buscar
                    </Button>
                </Col>
            
             </Form.Group>
             
            

            </Col>
            <Col md={6}>
               Listado de máquinas:

                  
                  <table className='table'>
                  <thead>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Trabaja s/n</th>
                  </tr>
                  </thead>
                  <tbody>

                  {maquinas.map(maquina => (
                                <tr key={maquina.id} >

                                <td> {maquina.id} </td>   
                                <td> {maquina.description} </td> 
                                <td> {maquina.company} </td> 
                                <td> {maquina.working} </td> 
                                </tr>
                                
                            ))}

                  </tbody>
                  </table>


            </Col>
            </Row>

            


        </Form>
    )
}
export default Formulario
