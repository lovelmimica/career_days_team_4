import styled from 'styled-components';
import PageBackground from '../../assets/images/login-background.svg';
import {DevicesMinSizes} from '../../Sizes';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
    grid-row-start: 2;
    justify-self: center;
    align-self: center;
    width: 100%;

    @media (min-width: ${DevicesMinSizes.tablet}){
        width: 472px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        width: 539px;
    }
`;

export const LoginPage = styled.section`
    display: grid; 
    height: 100vh;
    grid-template-rows: 33% 33% 33%;
    background-image: url(${PageBackground});
    background-size: 100wv 100wh;
    
    @media (min-width: ${DevicesMinSizes.tablet}){
        grid-template-rows: 30% 20% 20% 30%;
    }


`;

export const ButtonWrapper = styled(Link)`
    grid-row-start: 3;
    align-self: end;
    margin: 0 16px 16px 16px; 
    text-decoration: none;

    @media (min-width: ${DevicesMinSizes.tablet}){
        align-self: start;
        justify-self: center;
        width: 232px;
    }


`;