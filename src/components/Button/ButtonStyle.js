import styled from 'styled-components';
import {DevicesMinSizes} from '../../Sizes';

export const StyledButton = styled.div`
    border-radius: 4px;
    background-color: #15698f;
    height: 56px;
    max-height: 100%;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 26px;
    margin: 5px;

    &.closeButton{
        border: solid 2px #15698f;
        background-color: white;
        color: #15698f;
    }

    &:hover{
        background-color: #145a8c;
    }

    /* U modalu bi trebalo biti prilagođeno uređaju, ali se brejka na drugim mjestima */
    /*width: 50%;
    margin: auto;
    @media (max-width: ${DevicesMinSizes.tablet}){
        width: 100%;
    }*/
`;