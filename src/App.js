import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contacto from './pages/Contacto'
import Home from './pages/Home';
import Productos from './pages/Productos';
import Detail from './pages/Details';
import Cart from './pages/Cart'
//importando react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//BrowserRouter: embuelve toda la aplicaicion y le da la capacidad de manejar rutas a su contenido
//Routes: embuelve las rutas directas de la aplicacion lo que quede fuera del contenedor sera renderizado en todas las rutas
//Route: define ruta especifa dentro de Routes propiedades: path="/rutaEjm" y element{componente a renderizar}
function App() {
  return (
  <BrowserRouter>
     <NavBar/>

    <Routes>
      <Route path='/' element={
        <Home/>
      }/>

      <Route path='/Productos' element={
        <Contacto/>
      }/>

      <Route path='/Contacto' element={
        <Productos/>   
      }/>

      <Route path='/productos/:id' element={
        <Detail/>   
      }/>
      <Route path='/cart' element={
        <Cart />
      }/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
