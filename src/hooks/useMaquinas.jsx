import { useContext } from 'react'
import MaquinasContext from '../context/MaquinasProvider'

const useMaquinas = () => {

    return useContext(MaquinasContext)

}

export default useMaquinas


