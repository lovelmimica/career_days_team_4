import React from 'react';

//Styled components
import { StyledReviewCheckbox, StyledReviewCheckboxChecked } from './ReviewCheckboxStyle';

const ReviewCheckbox = (props) => {
    return(
        <>
            {props.checked ? 
            <StyledReviewCheckboxChecked onClick={props.onClick}>{props.value}</StyledReviewCheckboxChecked> : 
            <StyledReviewCheckbox onClick={props.onClick}>{props.value}</StyledReviewCheckbox>}
        </>
    );
}

export default ReviewCheckbox;