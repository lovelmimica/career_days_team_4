import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

//Styled components
import { StyledNavBar, ExpandMenuButton, CloseMenuButton, ButtonWrapper, NavItemsWrapper, MenuImage, NavBarBottom, NavBarMobile, NavBarStandard } from './NavBarStyle';

//Components
import NavItem from '../NavItem/NavItem';
import Button from '../Button/Button';

const NavBar = (props) => {
    const [menuExpanded, setMenuExpanded] = useState(false);
    const history = useHistory();

    const expandMenu = () =>{
        setMenuExpanded(true);
    }

    const closeMenu = () =>{
        setMenuExpanded(false);
    }

    const gotoLogin = () => {
        history.push('/');
    }

    return(
        <>
        <NavBarStandard>
            {props.children}
            <ButtonWrapper><Button onClick={gotoLogin} text='Odjava' /></ButtonWrapper>
        </NavBarStandard>
        {menuExpanded && 
            <NavBarMobile maxHeigth={props.maxHeigth}>
                <NavItemsWrapper>
                    {props.children}
                </NavItemsWrapper>
                <NavBarBottom>
                    <MenuImage />
                    <ButtonWrapper><Button onClick={gotoLogin} text='Odjava' /></ButtonWrapper>
                </NavBarBottom>
            </NavBarMobile>}
        {menuExpanded == false ? 
            <ExpandMenuButton onClick={expandMenu}/> : <CloseMenuButton onClick={closeMenu}/>
        }
        </>
    );
}

export default NavBar;