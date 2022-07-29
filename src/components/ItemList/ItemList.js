import ItemProduct from "../Item/Item"
const ItemList = ({dataProducts})=>{
    return(
        // esta etiqueta engloba el contenido pero sin ser un div 
        <>
            {dataProducts.map((product)=>{
                return <ItemProduct key={product.id} data={product}/>
            })}
        </>
    )
}
export default ItemList