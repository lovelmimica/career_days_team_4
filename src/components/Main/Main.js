import React from 'react';
import { Route } from 'react-router-dom';

//Styled components
import { StyledMain } from './MainStyle';

const Main = (props) => {
    return(
        <StyledMain>
            {props.children}
        </StyledMain>
    );
}

export default Main;