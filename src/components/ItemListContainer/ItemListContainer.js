import {useEffect, useState } from "react"
import ItemProduct from "../Item/Item"
import ItemList from "../ItemList/ItemList"
import products from "../../Utils/products.Mock"
import ItemDetails from "../../ItemDetail/ItemDetail"
const  ItemContainer = ({titulo} ) => {
    // const product1 ={
    //     tile: "campera invierno",
    //     precio: 15000,
    //     imagen: 'cuidado.jpg',
    //     stock:6
    // }
    // const product2 ={
    //     tile: "remera",
    //     precio: 25000,
    //     imagen: 'hielo.jpg',
    //     stock:4
    // }
    
    // const product3 ={
    //     tile: "remera",
    //     precio: 25000,
    //     imagen: 'decierto.jpg',
    //     stock:1
    // }
    
    // promesa
    const [listProducts, setListProducts] = useState([])
    const getProducts = new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    }) 
    
    useEffect(()=>{
        getProducts
        .then((res)=>{
            setListProducts(res)
        })
        .catch((error)=>{
            console.log("la llamada fallo")
        })
        .finally(()=>{
            console.log("desactivar imagen de carga :v")
        })       
    },[])
    // console.log("activar imagen de carga ;)")


    // funsion asyncrona
    // const getLog = async ()  => {
    //     try{
    //         const responselog = await logPromise()
    //         console.log(`respuesta de funcion asyncrona ${responselog}`)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }
    const listaReducida = products[0]
    console.log(listaReducida)
    return(
        <div>
            <h2>{titulo}</h2>
            <ItemDetails dataProducts={listaReducida}/>
            {/* <ItemList dataProducts={listProducts}/> */}
        </div>
    )
}
{/* <ItemProduct data={product1}/>
<ItemProduct data={product2}/>
<ItemProduct data={product3}/> */}

export default ItemContainer




    

 
    // map productos
    // {listProducts.map( product=> <ItemProduct data={product}/>)}


    
