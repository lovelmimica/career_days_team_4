import React from 'react';

//Styled components
import { StyledNavItem } from './NavItemStyle';

const NavItem = (props) => {
    return(
        <StyledNavItem className={props.className} activeClassName='active' to={props.to}>{props.text}</StyledNavItem>
    );
}

export default NavItem;