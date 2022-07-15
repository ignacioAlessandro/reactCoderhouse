import './App.css';
import ItemContainer from './components/ItemContainer/ItemContainer';
import NavBar from './components/NavBar/NavBar';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>hello word</h1>
      <div className='list'>
        <ItemContainer titulo="productos en oferta"/>
        <ItemContainer titulo="productos mas vendidos"/>
        <ItemContainer titulo="productos en temporada"/>
      </div>
      {/* esto serviria para renderizar lo que esta dentrodeun modal */}
      <Modal ejm="esto es un aprop de ejm">
          <h2>modal ejj</h2>
          <p>esto puede bariar dependiendo la ventana emergente</p>
      </Modal>
    </div>
  );
}

export default App;
