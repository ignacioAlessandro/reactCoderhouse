// inportar estados
import { useState } from "react"
const  ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1) 
    // funcionalidad estado
    const addNumber = ()=>{
        if(contador>=stock){
            setContador(contador+0)
        }else{
            setContador(contador+1)
        }
    }
    const removeNumber =()=>{
        if(contador<=1){
            setContador(contador=1)
        }else{
            setContador(contador-1)
        }
    }
    return(
        <div>
            <div className="countProd">
                <button onClick={addNumber}>+</button>
                <p>{contador}</p>
                <button onClick={removeNumber}>-</button>
            </div>
            <p>stock: {stock}</p>
        </div>
    )
}

export default ItemCount