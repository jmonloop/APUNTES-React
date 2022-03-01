
import React from 'react';
import ButtonGoTo from '../../Components/ButtonGoTo/ButtonGoTo';
import './Register.css';

const Register = () => {


    return(
        <div className='designRegister'>
            soy Register
            <ButtonGoTo destino={"Home"} url={"/"}/>
            <ButtonGoTo destino={"Login"} url={"/login"}/>
        </div>
    )
};

export default Register;