// esto es un componente
// con destructuring
const  ItemProduct = ({precio,producto}) => {
    // console.log(props)
    return(
        <div>
            <p>{producto}</p>
            <span>${precio}</span>
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