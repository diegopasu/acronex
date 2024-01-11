import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const DetalleContext = createContext()

const DetalleProvider = ({children}) => {
    
    const [maquinas, setMaquinas] = useState([])
    
    
    const consultarMaquina = async datos => {

        try {
            const url = `https://wrk.acronex.com/api/challenge/machines/?q=${datos.nombre}` 

            const { data } = await axios(url)
            
            console.log(data)
            
            //setMaquinas1(data)

        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <DetalleContext.Provider
            value={{
                consultarMaquina,
                maquinas
            }}
        >
            {children}
        </DetalleContext.Provider>
    )
}

export {
    DetalleProvider
}

export default DetalleContext

