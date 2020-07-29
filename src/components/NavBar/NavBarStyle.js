import React from 'react';
import styled from 'styled-components';
import MenuIcon from '../../assets/images/menu.svg';
import CloseIcon from '../../assets/images/close-copy.svg';
import CpsrkHalfLogo from '../../assets/images/cpsrk-logo-large.svg';
import {DevicesMinSizes} from '../../Sizes';

export const NavBarMobile = styled.div`
    position: absolute;
    z-index: 10000;
    top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    width: 100%;
    height: ${props => props.maxHeigth}px;
    
    @media (min-width: ${DevicesMinSizes.tablet}){
        display: none;
    }
`;

export const NavBarStandard = styled.div`
    display: none;
    width: inherit;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 40px;
        height: 100%;
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        margin-right: 108px;
    }
`;

export const ButtonWrapper = styled.div`
    width: auto;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    
    @media (min-width: ${DevicesMinSizes.tablet}){
        width: 104px;
        height: 48px;
        margin: 0 0 0 32px;;
    }
`;

export const ExpandMenuButton = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${MenuIcon});
    margin-right: 16px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: none;
        position: absolute;
    }
`;

export const CloseMenuButton = styled.div`
    width: 12px;
    height: 12px;
    padding: 6px 6px 6px 6px;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 16px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: none;
        position: absolute;
    }
`;

export const NavItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${DevicesMinSizes.tablet}){
        flex-direction: row;
    }
`;

export const MenuImage = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${CpsrkHalfLogo});
    background-repeat: no-repeat;
    background-position: right center;
    margin-bottom: 48px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: none;
    }
`;

export const NavBarBottom = styled.div``;
