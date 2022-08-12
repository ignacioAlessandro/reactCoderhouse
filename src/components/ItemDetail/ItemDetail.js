// import ItemCount from "../ItemCount/ItemCount"
// import {useEffect, useState } from "react"
// esto es un componente
// con destructuring
const  DetailItem = (data) => {
    // const [listProducts, setListProducts] = useState([])
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
            {/* <ItemCount stock={stock}/> */}
            <p>stock: {datos.stock}</p>
            <button>comprar</button>
        </div>
    )
}

export default DetailItem