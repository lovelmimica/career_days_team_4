import React from 'react';
import Logo from '../../assets/images/cpsrk-logo.svg';
import {
    useWindowHeight,
  } from '@react-hook/window-size'

//Styled components
import { StyledHeader, LogoWrapper, LogoImage, LogoText } from './HeaderStyle';

//Components
import NavBar from '../NavBar/NavBar';
import NavItem from '../NavItem/NavItem';

const Header = (props) => {
    const windowHeigth = useWindowHeight();


    return(
        <StyledHeader>
            <LogoWrapper>
                <LogoImage src={Logo} alt='Logo' />
                <LogoText>Centar za podršku studentima i razvoj karijera</LogoText>
            </LogoWrapper>
            <NavBar maxHeigth={windowHeigth - 70}>
                {props.navItems.map((navItem, index) => (
                    <NavItem to={navItem.to} text={navItem.text} className={navItem.bigScreens == false ? 'smallScreenOnly' : ''} />
                ))}
            </NavBar>
        </StyledHeader>
    );
}

export default Header;