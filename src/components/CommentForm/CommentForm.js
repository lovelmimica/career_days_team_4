import React from 'react';

//Styled components
import { StyledCommentForm, StyledAverageScore, Label, Value } from './CommentFormStyle';

//Components
import Button from '../Button/Button';
import CommentList from '../CommentList/CommentList';

const CommentForm = () => {
    return(
        <>
            <StyledCommentForm>
                <Label>Naziv događaja:</Label>
                <Value>Kreiraj svoju Pokedex aplikaciju uz ReactJS</Value>
                <Label>Komentari:</Label>
                <CommentList />
            </StyledCommentForm>
            <StyledAverageScore>Prosječna ocjena za ovo predavanje je <strong>4.7</strong></StyledAverageScore>
        </>
    );
}

export default CommentForm;