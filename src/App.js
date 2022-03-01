
import './App.css';

//Importo métodos de react-router-dom para navegar entre los diferentes Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importo los diferentes Containers o páginas que cambian
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';

//Importo componentes (en App.js funcionan como las partes de la app que no cambian)
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//App() es el núcleo de todo
function App() {
  return (
    //Aqui funcionará el enrutado de la aplicación.
    <div className="App">

      {/* Dentro de BrowserRouter, fuera de Routes, metemos componentes estáticos */}
      <BrowserRouter>

        {/* Como el header */}
        <Header/>
        
        {/* Dentro de routes metemos las páginas que cambian */}
        <Routes>
          {/* Se les llama usando los paths de react-router-dom */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         
        </Routes>
        
        <Footer/>

      </BrowserRouter>
        
      

    </div>
  );
}

export default App;
