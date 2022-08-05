import DetailItem from "../ItemDetail/ItemDetail"
import products from "../../Utils/products.Mock"
import {useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
const ItemDetail = () => {
    const parametro = useParams()
    const [listProducts, setListProducts] = useState([])
    const getProductos = new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    }) 
    
    useEffect(()=>{
        getProductos.then((res)=>{
            setListProducts(res)
        }).catch((error)=>{
            console.log("la llamada fallo")
        }).finally(()=>{
            console.log("desactivar imagen de carga :v")
        })       
    },[])
    
    // const listaReducida2 = listProducts.map((product)=>{
    //     return 
    // })
    // const listaReducida = listProducts.map(products)

    // const listaReducida = products[userparametro]
    // const listaReducida2 = listaReducida.find((productos)=>productos.id == parametro) 
    const listaReducida = listProducts.find(x=> x.id == parametro.id)
    // console.log(`yqs${}`)
    // console.log(`el valor es: ${parametro.id}`)
    
    // console.log(listaReducida)

// const ItemList = ({dataProducts})=>{
    // const {producto,imagen,precio,stock} = listaReducida
    // for (const product of dataProducts) {
    //     return <ItemProduct key={product.id} data={product}/>
    // }
    return(
        // esta etiqueta engloba el contenido pero sin ser un div 
        <>
            
            <DetailItem dataId={listaReducida}
            
                // imagen={imagen} 
                // precio={precio}
                // stock={stock} 
                // producto={producto}
                />
            
        </>
    )
}
export default ItemDetail
