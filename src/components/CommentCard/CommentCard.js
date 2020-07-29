import React from 'react';

//Styled components
import { StyledCommentCard, StyledCommentHead, StyledCommentBody, Data, Label, Value } from './CommentCardStyle';

const CommentCard = (props) => {
    return(
        <StyledCommentCard id={props.id}>
            <StyledCommentHead>
                <Data>
                    <Label>Ime i prezime:</Label>
                    <Value>{props.student}</Value>
                </Data>
                <Data>
                    <Label>Ocjena predavanja:</Label>
                    <Value>{props.rating}</Value>
                </Data>
            </StyledCommentHead>
            <StyledCommentBody>
                <Label>Komentar polaznika:</Label>
                <Value>{props.content}</Value>
            </StyledCommentBody>
        </StyledCommentCard>
    );
}

export default CommentCard;