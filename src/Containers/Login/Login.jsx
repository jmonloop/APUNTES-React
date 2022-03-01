//Importo useState y useEffect para crear y usar hooks
import React, {useState, useEffect} from 'react';
import ButtonGoTo from '../../Components/ButtonGoTo/ButtonGoTo';
import axios from  'axios';
import './Login.css';




const Login = () => {
    //Para hacer que el componente, "reaccione" a los cambios, esos cambios no pueden ser variables normales, ya que cada componente está envuelto por un "estado".
    //Esas variables son los HOOKS que son variables que está "enganchadas" al estado del componente.

    //Declaro el hook "credentials" que será la variable que cogerá el token desde el backend. La declaro vacía
    //setCredentials es lo que usamos para asignar valores al hook (manejador)
    const [credentials, setCredentials] = useState("");
    //esto es lo mismo que esto pero para React:
        //let credentials = "";

    //useEffect es lo que se ejecuta cuando hay cambios en algún hook. 
        //Equivale al componentDidMount oficial de las clases de React (useEffect es usando React por funciones)

    //Pero hay 3 tipos según cuando queramos que se ejecute:
    
    //Ejecuta cuando se "monta" el componente, es decir cuando es llamado
    useEffect(()=>{
        console.log("hola, me he montado")
    },[]); //El [] significa que este hook solo se ejecuta la primera vez cuando se monta el componente.


    //Ejecuta cuando se "actualiza" el componente, es decir cuando un hook cambia de valor
    useEffect(()=> {
        console.log(credentials, "esto vale credentials")
    }); //Este useEffect al no llevar [], se ejecuta cada vez que cambie el valor del hook. A diferencia del otro

    //FUNCIONES PROPIAS
    const fingiendoLogin = async () => {

        let body = {
            email : "david@gmail.com",
            password : "1234"
        }

        try {
            let resultado =await axios.post("http://localhost:5500/users/login", body)

            setCredentials(resultado.data)
        } catch (error) {
            console.log(error)
        }
    }

    //RENDERIZADO --> Aquí va lo que generamos en el componente. 
    //Se meten dentro de distintos ifs según los cambios en los hooks

    //En este caso, si credentials.token existe (se usa "?" por si no existe)
    if(credentials?.token !== undefined){
        return(
            //Renderiza el token que nos devuelve la función fingiendoLogin
            <div>{credentials.token}</div>
        )
    }else {
        return(
            <div className='designLogin'>
                soy Login
                <ButtonGoTo destino={"Home"} url={"/"}/>
                <div className='fakeLogin' onClick={()=>fingiendoLogin()}>LOGEAME</div>
            </div>
        )
    };
};

export default Login;