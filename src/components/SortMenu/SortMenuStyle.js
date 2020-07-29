import styled from "styled-components";
import {DevicesMinSizes} from '../../Sizes';

export const StyledSortMenu = styled.div`
    position: absolute;
    right: 10px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    color: black;
    text-align: left;
    font-size: 16px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        margin-left: -100px;
        right: unset;
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        font-size: 14px;
    }
`;

export const MenuHead = styled.a`
    background-color: #eeeeee;
    margin: 0;
    padding: 8px 16px 8px 16px;
    font-weight: bold;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const MenuItem = styled.a`
    background-color: white;
    margin: 0;
    cursor: pointer;
    padding: 8px 16px 8px 16px;
    font-weight: 100;

    &:last-child{
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    &:hover{
        color: #15698f;
        font-weight: bold;
        cursor: pointer;
    }
`;


