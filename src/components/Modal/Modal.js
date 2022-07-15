/*esto es un children debe tener si o si esa propieda "children" la diferencia esq permite reutilizar el mismo componente poniendo diferentes propiedades internas
 para no hacer nuevos componentes con contenidos/estilos similares
en sus props, pero puede tener mas props*/
const Modal = ({ejm,children}) => {
    return(
        <div className="agregame-css">
            <p>{ejm}</p>
            {children}
        </div>
    )
}

export default Modal