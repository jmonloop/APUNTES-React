//Importo useState y useEffect para crear y usar hooks
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGoTo from '../../Components/ButtonGoTo/ButtonGoTo';
import axios from  'axios';
import './Login.css';




const Login = () => {
    //Variables locales
    let navigate = useNavigate();

    //1 HOOKS--> (equivalen al estado en los componentes de clase)
    //Para hacer que el componente, "reaccione" a los cambios, esos cambios no pueden ser variables normales, ya que cada componente está envuelto por un "estado".
    //Esas variables son los HOOKS que son variables que está "enganchadas" al estado del componente.

    //Declaro el hook "credenciales" que será la variable que cogerá el token desde el backend. La declaro vacía
    //setcredenciales es lo que usamos para asignar valores al hook (manejador)
    const [credenciales, setcredenciales] = useState("");
    //esto es lo mismo que esto pero para React:
        //let credenciales = "";

    const [datosUsuario, setDatosUsuario] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");

    //Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})
    };

    const checkPassword = (e) => {
        if(e.target.value.length < 4){
            setMsgError("EL password debe de tener 4 caracteres");
        } else {
            setMsgError("");
        }

    };

    
    //3 USEEFFECT son funciones que renderizan el componente cuando detectan cambios en algún hook interno. 
        //Equivale al componentDidMount oficial de las clases de React (useEffect es usando React por funciones)

    //Pero hay 3 tipos según cuándo queramos que renderice:
    
    //Renderiza cuando se "monta" el componente, es decir cuando el componente es abierto
    useEffect(()=>{
        console.log("hola, me he montado")
    },[]); //El [] significa que este useEffect solo se ejecuta la primera vez cuando se monta el componente.


    //Renderiza cuando se "actualiza" el componente, es decir cuando un hook cambia de valor
    useEffect(()=> {
        //Este useEffect al no llevar [], se ejecuta cada vez que cambie el valor del hook. 
        //Es peligroso cambiar hooks aquí dentro, si no tenemos condicionales que eviten
        //que entremos en bucles infinitos.

        console.log("credenciales vale...", credenciales)

        //Si hemos recibido el token desde el backend..
        if(credenciales?.token !== undefined){
            //Tras 3 segundos nos redirige a profile
            setTimeout(()=>{
                navigate("/profile");
            }, 3000);
        };
    });

    //Funciones locales
    const login = async () => {
        try {
            //Guardamos en body los datos de usuario
            let body = {
            email: datosUsuario.email,
            password: datosUsuario.password
        }
            //Llama por axios al endpoint del back de hacer login
            let resultado =await axios.post("http://localhost:5000/users/login", body)

            //Cambiamos el valor del hook xredentials, por lo tanto se recargará el componente
            if(resultado.data === "Invalid email or password"){
                setMsgError2("Usuario o contraseña inválido")
            }else{

                setcredenciales(resultado.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    //2 RENDERIZADO --> Aquí va lo que generamos en el componente. 
    //Se meten dentro de distintos ifs según los cambios en los hooks

    //En este caso, si credenciales.token existe (se usa "?" por si no existe)
    if(credenciales?.token !== undefined){
        return(
            //Renderiza un mensaje de bienvenida

            //user.name es el formato que nos llega desde el back
            <div>Hola {credenciales?.user?.name}, bienvenido de nuevo</div>
        )
    //Mientras el token no llegue(no hemos hecho login), muestra el formulario de hacer login
    }else {
        return(
            <div className='designLogin'>
                {/* Esta línea nos permite ver a tiempo real como van quedando en el hook los datos que metemos por input */}
                {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>}
                
                <div className="designFormulario">
                    {/* En cada input, el "name" es lo que va a enlazar lo que introduzcamos con su hook mediante el e.target.name*/}
                    <input type="email" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>

                    {/* La función onChange está predefinida para que se ejecuten funciones al detectar cambios en un input */}
                    <input type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e); checkPassword(e)}}/>

                    {msgError}
                    {msgError2}
                </div>
                <div className="loginDesign espacio" onClick={()=>login()}>LOG ME!</div>
                <ButtonGoTo destino={"Profile"} url={"/profile"}/>
            </div>
        )
    };
};

export default Login;