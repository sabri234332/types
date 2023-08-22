import './App.css'
import {Link,Routes,Route} from 'react-router-dom'
import Calculadora from './page/Calculadora';
import Multiplicar from './page/Multiplicar';
import Numeros from './page/Numeros';
import Temperatura from './page/Temperatura';
import ContadorPalabras from './page/ContadorPalabras';
import FibonacciGenerator from './page/FibonacciGenerator ';


// import Calculadora from './page/Calculadora'


function App() {

 
  
  return (


    <>
        <nav className="navbar">
    <ul className="nav-list">
      <li><Link to="/calculadora">Calculadora</Link></li>
      <li><Link to="/multiplicar">Multiplicar</Link></li>
      <li><Link to="/numeros">Numeros</Link></li>
      <li><Link to="/temperatura">Temperatura</Link></li>
      <li><Link to="/contadorPalabras">Contador</Link></li>
      <li><Link to="/fibonacci">Fibonacci</Link></li>
    </ul>
  </nav>
      <Routes>
    <Route path='/calculadora' element={<Calculadora/>}/>
    <Route path='/multiplicar' element={<Multiplicar/>}/>
    <Route path='/numeros' element={<Numeros/>}/>
    <Route path='/temperatura' element={<Temperatura/>}/>
    <Route path='/contadorPalabras' element={<ContadorPalabras/>}/>
    <Route path='/fibonacci' element={<FibonacciGenerator/>}/>
      </Routes>
    </>
  )
}

export default App
