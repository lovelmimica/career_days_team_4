import React from 'react';

//Styled components
import { StyledEvidentionSearch } from './EvidentionSearchStyle';

const EvidentionSearch = (props) => {
    return(
        <StyledEvidentionSearch type="text" id="search" name="search" placeholder="Pretraži" />
    );
}

export default EvidentionSearch;