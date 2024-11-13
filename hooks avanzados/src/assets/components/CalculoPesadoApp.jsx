import { useState, useMemo } from "react"

export const CalculoPesadoApp = () => {
  
    const [show, setShow] = useState(true)
    const [numList, setNumList] = useState([2,3,4,5,6,7,8,9])

    const getCalculo = (numList) => {
        console.log('Calculando..')
        return numList.reduce((a, b) => a*b)
    }

    const memorizedValue = useMemo(() => getCalculo(numList), [numList])
  
    return (
    <>
        <h2>Cálculos:</h2>
        {show && <h4>El cáculo es: {memorizedValue}</h4>}

        <button className="btn btn-info" onClick={() => setShow (!show)}>{show ? 'ocultar cálculo' : 'mostrar cálculo'}</button>
    </>
  )
}
