import React, { useState, useEffect } from 'react';

//Styled components
import { StyledReviewScore, StyledReviewScoreValue } from './ReviewScoreStyle';

//Components
import ReviewCheckbox from '../ReviewCheckbox/ReviewCheckbox';

const ReviewScore = (props) => {
    const [state, setState] = useState(0);

    const handleClick = (e) =>{
        if(e.target.innerHTML == state) {
            setState(0);
        }
        else {
            setState(e.target.innerHTML);
        }
        console.log(state);
    }

    const checkboxes = [];
    for (let index = 1; index <= 5; index++) {
        if (state == index){
            checkboxes.push(<ReviewCheckbox onClick={handleClick} value={index} checked={true}/>);
        }
        else {
            checkboxes.push(<ReviewCheckbox onClick={handleClick} value={index} checked={false}/>);
        }
    }

    return(
        <StyledReviewScore>
            {checkboxes}
        </StyledReviewScore>
    );
}

export default ReviewScore;