//siempre con UpperCamelCase
import CartWidget from './CartWidget'
import './NavBar.css'
// el componente link to="/ruta" es el equibalente <a hreft:="/ruta". Importacion:
import { Link } from 'react-router-dom'
const NavBar  =()=>{
    return(
        <nav className='NavBar'>
            <h1>logoo</h1>
            <ul>
            <Link to="/"><li><button>inicio</button></li></Link>
            <Link to="/Productos"><li><button>productos</button></li></Link>
            <Link to="#"><li><button>sobre nosotros</button></li></Link>
            <Link to="/Contacto"><li><button>contacto</button></li></Link>
            <a href='https://www.google.com.ar/' target="_blank" rel='noreferrer'><li><button>google</button></li></a>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar