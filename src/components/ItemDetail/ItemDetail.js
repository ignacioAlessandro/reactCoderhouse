// import ItemCount from "../ItemCount/ItemCount"
import {useEffect, useState } from "react"
// esto es un componente
// con destructuring
const  DetailItem = (dataId) => {
    // const [listProducts, setListProducts] = useState([])
    const datos = dataId.data
    
    const {stock,precio,producto,imagen} = dataId
    console.log(dataId);
    // poner data como parametro a pasar mas tarde const {producto,imagen,precio} = data
    // console.log(props)
    return(
        <div>
            <img src={`/assets/${imagen}`} alt="imagen producto"/>
            <p>{producto}</p>
            <span>${precio}</span>
            {/* <ItemCount stock={stock}/> */}
            <p>stock: {stock}</p>
            <button>comprar</button>
        </div>
    )
}

export default DetailItem