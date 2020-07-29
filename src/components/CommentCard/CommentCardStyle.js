import styled from "styled-components";
import {DevicesMinSizes} from '../../Sizes';

export const StyledCommentCard = styled.div`
    padding: 15px;
    border: solid 1px #cccccc;
    border-radius: 4px;
    margin-bottom: 10px;
`;

export const StyledCommentHead = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    @media (max-width: ${DevicesMinSizes.tablet}){
        display: block;
    }
`;

export const StyledCommentBody = styled.div``;

export const Data = styled.div``;

export const Label = styled.p`
    font-weight: bold;
`;

export const Value = styled.p``;