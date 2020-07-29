import styled from 'styled-components';
import {DevicesMinSizes} from '../../Sizes';

export const StyledDataTable = styled.table`
    margin-left: 16px;
    margin-right: 16px;
    display: flex; 
    flex-direction: column;
    width: 100%;
    

    
    @media (min-width: ${DevicesMinSizes.tablet}){
        border: 2px solid #cccccc;
        border-radius: 5px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        &.events{
            max-width: 1112px;
        }

        &.students{
            max-width: 644px;
        }
        grid-column-start: 1;
        grid-column-end: 3;
        justify-self: center;

    }
`;

export const TableHead = styled.th`
    display: none;

    @media (min-width: ${DevicesMinSizes.tablet}){
        background-color: #15698f;
        display: grid; 
        border-bottom: 2px solid #cccccc;
        &.events{
            grid-template-columns: 33% 33% 33%;
            padding: 0 16px 0 16px;
        }
        &.students{
            grid-template-columns: 60% 40%;
            padding: 0 16px 0 16px;
        }
    }
`;

export const HeadCell = styled.td`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 16px;
    font-weight: bold;

    @media (min-width: ${DevicesMinSizes.tablet}){  
        &:nth-child(1){
            text-align: left;
            border-right: 2px solid #cccccc;
        }

        &.students:nth-child(2){
            text-align: right;
            border-right: none;
        }

        &:nth-child(2){
            text-align: right;
            border-right: 2px solid #cccccc;
        }
    }
`;

export const SortIcon = styled.img`
    width: 18px; 
    height: 18px;

    &:hover{
        cursor: pointer;
    }
`;

export const SortWrapper = styled.div`
    
`;