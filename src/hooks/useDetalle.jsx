import { useContext } from 'react'
import DetalleContext from '../context/DetalleProvider'

const useDetalle = () => {
    return useContext(DetalleContext)
}

export default useDetalle
