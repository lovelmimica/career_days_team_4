import React from 'react';

//Components
import Button from '../../components/Button/Button';

//Styled Components
import {Logo, LoginPage, ButtonWrapper} from './LoginStyle.js';

//Images
import LogoImg from '../../assets/images/group-2.svg';

const logIn = () => {
    console.log('login')
}

const Login = () => {
    return(
        <LoginPage>
            <Logo src={LogoImg} />
            <ButtonWrapper to='/events'><Button text='Prijava'/></ButtonWrapper>
        </LoginPage>
    );
}

export default Login;