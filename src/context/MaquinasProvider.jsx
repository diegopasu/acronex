//'https://wrk.acronex.com/api/challenge/machines/?q='                         

import { useState, useEffect, createContext } from 'react'
import axios from 'axios'


const MaquinasContext = createContext()

const MaquinasProvider = ({children}) => {
    
    const [maquinas, setMaquinas ] = useState([])

    const obtenerMaquinas = async () => {
        try {
            const url = 'https://wrk.acronex.com/api/challenge/machines/?q='
            
            const { data } = await axios(url)
            //console.log(data)
            setMaquinas(data)

      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        obtenerMaquinas()
    }, [])

    return (
      <MaquinasContext.Provider 
         value={{
           maquinas


         }}
      >
      {children}

      </MaquinasContext.Provider>
      
    )
}
export {
    MaquinasProvider
}

export default MaquinasContext
