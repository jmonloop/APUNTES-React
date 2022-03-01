//Importo react
import React from 'react';

//Importo el método 'useNavigate' de react-router-dom para poder darle funcionalidad de que al clicar nos lleve (navegue) a otras partes de la página
import { useNavigate } from 'react-router-dom';

//Importo la hoja de estilos css
import './ButtonGoTo.css';


//Función del componente metiéndole unas props
const Button = (props) => {

    //Fuera del return van las declaraciones del componente

    //Le decimos que use el método navigate para que al clicar navegue por la página
    let navigate = useNavigate();

    //Creamos la función llevame que usará la prop.url como dirección del navigate
    const llevame = () => {
        navigate(props.url);
    };

    //Dentro del return van las ejecuciones del componente (el div)
    return (
        //Le damos la clase para aplicar estilos y que ejecute la función llevame al clicar
        <div className='designButtonGoTo' onClick={()=>llevame()}>
            {/* Le digo que muestre el texto que lleva la prop "destino" */}
            {props.destino}
        </div>
    )
}

//Exporto el componente
export default Button;