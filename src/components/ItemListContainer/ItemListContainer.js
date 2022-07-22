import ItemProduct from "../ItemProduct/ItemProduct"
const  ItemContainer = ({titulo} ) => {
       
    return(
        <div>
            <h2>{titulo}</h2>
            <ItemProduct producto="remera" precio={1500}/>
            <ItemProduct producto="pantalon" precio={2000}/>
            <ItemProduct producto="campera" precio={1500}/>
            <ItemProduct producto="zapatillas" precio={5000}/>
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
    
