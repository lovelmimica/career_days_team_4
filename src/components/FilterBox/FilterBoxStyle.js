import styled from 'styled-components';
import Button from '../Button/Button';
import {DevicesMinSizes} from '../../Sizes';

export const StyledFilterPage = styled.div`
    width: calc(100% - 40px);
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    min-height: calc(100% - 70px);
    top: 72px;
    position: absolute;
    z-index: 1000;
    background-color: #f5f5f5;
    
    flex-direction: column;
    justify-content: space-between;
    display: none;

    &.tabMenuEventsFilters{
        display: flex;
        left: 0px;
        top: 72px;

        & .statusFiltersTitle{
            text-align: left;
        }

        & .evidenceFilters{
            align-items: flex-start;
        }
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        position: static;
        width: 100%;
        max-width: 400px;
        grid-column-start: 1;
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-self: center;
        margin-right: 0px;
    }
`;

export const StyledFilterBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    gap: 64px;
    margin-right: 88px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: grid; 
        grid-template-columns: 50% 50%;
        width: auto;

        &.evidenceFilterBox{
            display: flex;
            width: 100%;
        }
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        display: flex;
        flex-direction: column;
        margin-right: 0px;
    }
`;

export const FilterSection = styled.section`
    width: auto;
    height: auto;
    margin-bottom: 24px;

    :last-child {
        margin-top: 9px;
    }

    @media (min-width: ${DevicesMinSizes.tablet}){
        margin-bottom: 32px;

        :last-child {
            margin-top: 1px;
        }
    }
`;

export const FilterTitle = styled.h2`
    font-weight: bold;
    color: #15698f;
    font-size: 16px;

    &.statusFiltersTitle{
        text.align: left;
    }
`;

export const FilterBoxFooter = styled.footer`
    bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: grid;
        grid-template-columns: 50% 50%;
    }
    
    @media (min-width: ${DevicesMinSizes.laptop}){
        display: none;
    }
`;

export const ShowResultsButon = styled(Button)`
    margin-right: 14px;
`;

export const CloseButon = styled(Button)`
    border: solid 2px #15698f;
    background-color: #ffffff;
    color: #15698f;
`;

export const ClosingIcon = styled.img`
    float: right;
    width: 32px;
    height: 32px;
    object-fit: contain;
`;

export const TitleSection = styled.section`
    float: left;
`;

export const Head = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;    

    @media (min-width: ${DevicesMinSizes.laptop}){
        display: none;
    }
`;

export const MainSection = styled.div`
    width: 100%;
    float: left;
    display: flex;
`;