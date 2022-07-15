import ItemProduct from "../ItemProduct/ItemProduct"
const  ItemContainer = ({titulo} ) => {
    // console.log(props)
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