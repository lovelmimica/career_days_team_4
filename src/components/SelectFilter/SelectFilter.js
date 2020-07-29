import React from 'react';

//Styled components
import { StyledSelectFilter } from './SelectFilterStyle';

const companyOptions = [
    { key: 'speck', value: 'speck', text: 'Speck' },
    { key: 'slack', value: 'slack', text: 'Slack' },
    { key: 'stuck', value: 'stuck', text: 'Stuck' }
]

const SelectFilter = () => {
    return(
        <StyledSelectFilter placeholder='Odaberite poduzeće' >
            <option>Speck</option>
            <option>Salck</option>
            <option>Stuck</option>
        </StyledSelectFilter>
    );
}

export default SelectFilter;