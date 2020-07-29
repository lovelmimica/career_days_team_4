import styled from "styled-components";
import {DevicesMinSizes} from '../../Sizes';

export const StyledTableRow = styled.tr`
    background-color: white;
    margin-bottom: 16px;
    border: 2px solid #cccccc;
    padding: 16px 16px 16px 16px;
    border-radius: 5px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        &.events{
            display: grid; 
            grid-template-columns: 33% 33% 33%;
        }

        &.students{
            display: grid; 
            grid-template-columns: 60% 40%;
        }

        align-items: center;
        margin-bottom: 0px;
        border: none;
        padding-bottom: 2px;
        padding-top: 0px;
        border: none;
    }
`;

export const Label = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: bold;
    margin-bottom: 0px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: none;
    }
`;

export const Content = styled.p`
    font-size: 16px;
    line-height: 26px;
    margin-top: 0px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        margin-bottom: 0px;
        padding-bottom: 16px;
        padding-top: 16px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        text-align: left;
        padding-left: 0px;

    }
`;

export const CommentsLink = styled.a`
    font-size: 16px;
    line-height: 26px;
    color: #333333;
    text-decoration: underline;
    cursor: pointer;      

    @media (min-width: ${DevicesMinSizes.laptop}){
        &:hover{
            color: #15698f;
        }      
        text-align: left;
        padding-left: 16px;
    }
`;

export const RowCell = styled.td`
        display: flex;
        flex-direction: column;

        @media (min-width: ${DevicesMinSizes.tablet}){
            padding-right: 16px;
            border-bottom: 2px solid #cccccc;
            height: 100%;
            justify-content: center;

            &:nth-child(1){
                text-align: left;
                border-right: 2px solid #cccccc;
            }

            &.events:nth-child(2){
                text-align: right;
                border-right: 2px solid #cccccc;
                padding-left: 16px;
            }

            &:nth-child(2){
                text-align: right;
                padding-left: 16px;
            }
            
            &:nth-child(3){
                text-align: center;
            }
        }
`;

