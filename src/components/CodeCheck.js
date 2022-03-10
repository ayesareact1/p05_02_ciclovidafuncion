import React, { useEffect, useState } from 'react'

export default function CodeCheck(props) {

    const [codigo, setCodigo] = useState();
    const [isShowInput, setIsShowInput] = useState(true);
    const [contador, setContador] = useState(20);

    const handleChange = e => { // e es el evento con los valores de control de JavaScript
        setCodigo(e.target.value);
    }

    useEffect(() => {
        if (codigo === '1234') {
            setIsShowInput(false);
            setContador(0);
        }
    }, [codigo])

    useEffect(() => {
        const timer = setInterval(() => {
            if (contador > 0) {
                setContador(prevContador => prevContador - 1)
            }
        }, 1000)
        return () => clearInterval(timer);  // Callback opcional de limpieza
    }, [contador])

  return (
    <>
        { isShowInput ? 
            <>
                <p>Introduzca el código recibido por SMS</p>
                <input type='text' onChange={handleChange}/>
                <p className="clock">{contador}</p>
            </>
            :
            <p>Código correcto, bienvenid@</p>
        }
    </>
  )
}
