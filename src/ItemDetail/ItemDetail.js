import ItemProduct from "../components/Item/Item"
const ItemList = ({dataProducts})=>{
    const {producto,imagen,precio,stock} = dataProducts
    // for (const product of dataProducts) {
    //     return <ItemProduct key={product.id} data={product}/>
    // }
    return(
        // esta etiqueta engloba el contenido pero sin ser un div 
        <>
            
       
            <ItemProduct 
            
                imagen={imagen} 
                precio={precio}
                stock={stock} 
                producto={producto}
                
            />
            
        </>
    )
}
export default ItemList
