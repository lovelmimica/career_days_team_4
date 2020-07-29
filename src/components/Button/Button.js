import React from 'react';

//Styled components
import { StyledButton } from './ButtonStyle';

const Button = (props) => {
    return(
        <StyledButton className={props.className} onClick={props.onClick}>{props.text}</StyledButton>
    );
}

export default Button;