import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
// esto es un componente
// con destructuring
const  ItemProduct = ({data}) => {
    const {producto,imagen,precio, id} = data
    // console.log(props)
    return(
        <div>
            <Link to={`/Productos/${id}`}>
            <img src={`/assets/${imagen}`} alt="imagen producto"/>
            </Link>
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