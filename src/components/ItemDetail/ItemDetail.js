import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from 'react-router-dom'
// esto es un componente
// con destructuring
const  DetailItem = (data) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    const datos = data.data
    
    // const {stock,precio,producto,imagen} = data
    console.log(data);
    // poner data como parametro a pasar mas tarde const {producto,imagen,precio} = data
    // console.log(props)
    return(
        <div>
            <img src={`/assets/${datos.imagen}`} alt="imagen producto"/>
            <p>{datos.producto}</p>
            <span>${datos.precio}</span>
            {
                quantitySelected > 0 
                    ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> 
                    : <ItemCount setQuantitySelected={setQuantitySelected} productData={data}/>
            }
            {/* <ItemCount stock={datos.stock} setQuantitySelected={setQuantitySelected}/> */}
            {/* <p>stock: {datos.stock}</p> */}
            {/* <button>comprar</button> */}
        </div>
    )
}

export default DetailItem