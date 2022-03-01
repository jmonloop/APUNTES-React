
import React from 'react';
import ButtonGoTo from '../../Components/ButtonGoTo/ButtonGoTo';
import './Login.css';

const Login = () => {


    return(
        <div className='designLogin'>
            soy Login
            <ButtonGoTo destino={"Home"} url={"/"}/>
            <ButtonGoTo destino={"Register"} url={"/register"}/>
        </div>
    )
};

export default Login;