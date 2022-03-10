import React, { useRef } from 'react'

export default function AsideMenu() {

    const asideMenuRef = useRef(); // Referenciamos el elemento del DOM identificado con el atributo ref

    const handleToggleAsideMenu = () => {
        asideMenuRef.current.classList.toggle('open'); // Hasta current es el equivalente a document.getElementById(<id>)
    }

  return (
    <aside ref={asideMenuRef}>
        <div id="burger" onClick={handleToggleAsideMenu}>
            <div className="bar top"></div>
            <div className="bar center"></div>
            <div className="bar bottom"></div>
        </div>
    </aside>
  )
}
