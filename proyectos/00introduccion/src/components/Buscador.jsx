import React, { useState } from 'react'


const frutas=["manzana", "pera", "naranja", "platano","melon","uva"]
const Buscador = () => {
    /* const [filteredItems, setFilteredItems] = useState(["manzana", "pera", "naranja", "platano","melon","uva"]) */

    const [searchItem, setSearchItem] = useState("")
  return (
    <>
{/* formulario buscar 
ul los elementos del initial state
cada vez que escriba en el formulatio realizaremos la busqueda
*/}
<input type="text" value={setSearchItem()} />
    </>
   
  )
}

export default Buscador