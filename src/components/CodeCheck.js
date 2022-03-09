import React, { useEffect, useState } from 'react'

export default function CodeCheck(props) {

    const [codigo, setCodigo] = useState();
    const [isShowInput, setIsShowInput] = useState(true);

    const handleChange = e => { // e es el evento con los valores de control de JavaScript
        setCodigo(e.target.value);
    }

    useEffect(() => {
        if (codigo === '1234') {
            setIsShowInput(false);
        }
    }, [codigo])

  return (
    <>
        { isShowInput ?
            <>
                <p>Introduzca el código recibido por SMS</p>
                <input type='text' value={codigo} onChange={handleChange}/>
            </>
            :
            <p>Código correcto, bienvenid@</p>
        }
    </>
  )
}
