//siempre con UpperCamelCase
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar  =()=>{
    return(
        <nav className='NavBar'>
            <h1>logoo</h1>
            <ul>
                <li><button>inicio</button></li>
                <li><button>productos</button></li>
                <li><button>sobre nosotros</button></li>
                <li><button>contacto</button></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar