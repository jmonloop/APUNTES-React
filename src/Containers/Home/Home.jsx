//Importo react
import React from 'react';
//Importo la hoja de estilos
import './Home.css';
//Importo los components
import ButtonGoTo from '../../Components/ButtonGoTo/ButtonGoTo';


//función de este container
const Home = () => {

    //la lógica va dentro del return de la función..
    return(
        //..dentro de un div
        <div className='designHome'>
            soy Home
            {/* Metemos componentes */}
            {/* En este caso, "destino" y "url" son props del componente "ButtonGoTo" */}
            <ButtonGoTo destino={"Login"} url={"/login"}/>
            <ButtonGoTo destino={"Register"} url={"/register"}/>
        </div>
    )
};

//Exporto el fichero Home
export default Home;