import styled from 'styled-components';
import {DevicesMinSizes} from '../../Sizes';

export const StyledReviewCheckbox = styled.div`
    margin: 10px;
    width: 44px;
    height: 44px;
    /*padding: 22px;*/
    border-radius: 50%;
    border: solid 2px #cccccc;
    font-size: 16px;
    font-weight: bold;
    color: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: ${DevicesMinSizes.tablet}){
        margin: 5px;
        width: 35px;
        height: 35px;
    }
`;

export const StyledReviewCheckboxChecked = styled.div`
    margin: 10px;
    width: 44px;
    height: 44px;
    /*padding: 22px;*/
    border-radius: 50%;
    border: solid 2px #15698f;
    font-size: 16px;
    font-weight: bold;
    color: #15698f;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: ${DevicesMinSizes.tablet}){
        margin: 5px;
        width: 35px;
        height: 35px;
    }
`;