import ItemProduct from "../ItemProduct/ItemProduct"
const  ItemContainer = ({titulo} ) => {
    const product1 ={
        tile: "campera invierno",
        precio: 15000,
        imagen: 'cuidado.jpg',
        stock:6
    }
    const product2 ={
        tile: "remera",
        precio: 25000,
        imagen: 'hielo.jpg',
        stock:4
    }
    const product3 ={
        tile: "remera",
        precio: 25000,
        imagen: 'decierto.jpg',
        stock:1
    }
    return(
        <div>
            <h2>{titulo}</h2>
            <ItemProduct data={product1}/>
            <ItemProduct data={product2}/>
            <ItemProduct data={product3}/>
        </div>
    )
}

export default ItemContainer




// const [listProducts, setListProducts] = useState([])
    // const getProducts = new Promise( (resolve,reject) => {
    //     resolve(product)
    // })
    // getProducts.then((res)=>{
    //     setListProducts(res)
    // }).catch((error)=>{
    //     console.log("la llamada fallo")
    // })


    // promesa
    // const logPromise = new Promise((resolve,reject)=>{
    //     resolve("la promesa se cumplio")
    // })
    // console.log("activar imagen de carga ;)")
    // logPromise
    // .then((data)=>{
    //     console.log(data)
    // })
    // .catch((error)=>{
    //     console.log("la llamada fallo")
    // })
    // .finally(()=>{
    //     console.log("desactivar imagen de carga :v")
    // })

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

    // map productos
    // {listProducts.map( product=> <ItemProduct data={product}/>)}
    
