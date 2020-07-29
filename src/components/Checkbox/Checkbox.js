import React, { useState } from 'react';

//Styled components
import { StyledCheckbox, StyledCheckboxChecked } from './CheckboxStyle';

const Checkbox = (props) => {
    const [checked, setChecked] = useState(props.checked);

    const handleClick = (e) => {
        setChecked(!checked);
    }
    return(
        <>
            {checked ? <StyledCheckboxChecked onClick={handleClick} /> : <StyledCheckbox onClick={handleClick} />}
        </>
    );
}

export default Checkbox;