import ItemCount from "../ItemCount/ItemCount"
// esto es un componente
// con destructuring
const  ItemProduct = ({stock,precio,producto,imagen}) => {
    // poner data como parametro a pasar mas tarde const {producto,imagen,precio} = data
    // console.log(props)
    return(
        <div>
            <img src={`/assets/${imagen}`} alt="imagen producto"/>
            <p>{producto}</p>
            <span>${precio}</span>
            <ItemCount stock={stock}/>
            <p>stock: {stock}</p>
            <button>comprar</button>
        </div>
    )
}

{/* <div>
<img src={`/assets/${imagen}`} alt="imagen producto"/>
<p>{producto}</p>
<span>${precio}</span>
<ItemCount stock={data.stock}/>
<p>stock: {data.stock}</p>
<button>comprar</button>
</div>
) */}

// comun
// const  ItemProduct = (props ) => {
//     console.log(props)
//     return(
//         <div>
//             <img></img>
//             <p>{$props.producto}</p>
//             <span>${$props.precio}</span>
//             <button>comprar</button>
//         </div>
//     )
// }

export default ItemProduct