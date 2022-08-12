import DetailItem from "../ItemDetail/ItemDetail"
import products from "../../Utils/products.Mock"
import {useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
const ItemDetail = () => {
    const [productData, setProductData] = useState({})
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams()

    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (product) => {
            if(product.id == id) {
                console.log("producto filtrado: ", product)
                setProductData(product) 
            }
        }
    )
    }
    // const {id} = useParams()
    // const [listProducts, setListProducts] = useState([])
    // const [listaReducida, setListaReducida] = useState({})
    // // const getProductos = new Promise( (resolve,reject) => {
    // //     setTimeout(() => {
    // //         resolve(products)
    // //     }, 2000);
    // // }) 
    // const getProductos = () =>{
    //     listaReducida = products.find(x=> x.id == id)
    // }
    // useEffect(()=>{
    //     getProductos()
    // },{})
    
    // // const listaReducida2 = listProducts.map((product)=>{
    //     return 
    // })
    // const listaReducida = listProducts.map(products)

    // const listaReducida = products[userparametro]
    // const listaReducida2 = listaReducida.find((productos)=>productos.id == parametro) 
   
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
            
            <DetailItem
                 data={productData} setShowModal={setShowModal}
                // dataId={setListaReducida}
            
                // imagen={imagen} 
                // precio={precio}
                // stock={stock} 
                // producto={producto}
                />
            
        </>
    )
}
export default ItemDetail
