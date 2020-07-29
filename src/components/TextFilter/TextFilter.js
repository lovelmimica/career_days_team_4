import React from 'react';
import Icon from '../../../src/assets/images/SearchIcon.svg';

//Styled components
import { StyledTextFilter, StyledTextFilterIcon } from './TextFilterStyle';

const TextFilter = () => {
    return(
        <StyledTextFilter type="text" placeholder='Pretraži' icon={<StyledTextFilterIcon src={Icon}/>}/* onChange={(e)=>props.onValueChange(e.target.value)} */ />
    );
}

export default TextFilter;