import ItemCount from "../ItemCount/ItemCount"
// esto es un componente
// con destructuring
const  ItemProduct = ({data}) => {
    const {producto,imagen,precio} = data
    // console.log(props)
    return(
        <div>
            <img src={`/assets/${imagen}`} alt="imagen producto"/>
            <p>{producto}</p>
            <span>${precio}</span>
            <ItemCount stock={data.stock}/>
            <p>stock: {data.stock}</p>
            <button>comprar</button>
        </div>
    )
}

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