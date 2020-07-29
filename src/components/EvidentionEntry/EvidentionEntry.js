import React from 'react';

//Styled components
import { StyledEvidentionEntry, StyledEvidentionLabel } from './EvidentionEntryStyle';

//Components
import Checkbox from '../Checkbox/Checkbox';

const EvidentionSearch = (props) => {
    return(
        <StyledEvidentionEntry>
            <Checkbox checked={props.checked} />
            <StyledEvidentionLabel>{props.name}</StyledEvidentionLabel>
        </StyledEvidentionEntry>
    );
}

export default EvidentionSearch;