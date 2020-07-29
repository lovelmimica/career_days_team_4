import styled from 'styled-components';
import infoIcon from '../../assets/images/info-icon.svg';
import {DevicesMinSizes} from '../../Sizes';

export const StyledCheckBoxFilter = styled.ul`
    list-style: none;
    display: grid;
    width: 100%;
    justify-content: space-between;
    justify-items: space-between; 
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0px;

    &.evidenceFilters{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledListItem = styled.li`
    width: 140px;
    height: 24px;
    gap: 24px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: stretch;
`;

export const CheckBoxForm = styled.form`
    width: auto;
    height: auto;
    position: relative;
`;

export const CheckBoxItem = styled.input`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: solid 2px #333333;
    background-color: #ffffff;
    margin-right: 8px;
`;

export const CheckBoxText = styled.label`
    width: auto;
    height: auto;
    font-size: 16px;
    font-weight: normal;
    color: #333333;
    margin: 0;
`;

export const InfoIcon = styled.div`
    width: 16px;
    height: 16px;
    padding-left: 10px;
    vertical-align: text-bottom;
    background-image: url(${infoIcon});
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    object-fit: contain;
    cursor: pointer;
`;

export const InfoBox = styled.div`
    font-size: 14px;
    padding: 10px;
    align-items: center;
    justify-content: stretch;
    display: none;

    @media (min-width: ${DevicesMinSizes.tablet}){
        display: block;
        position: absolute;
        background-color: #ffffff;
        border-radius: 4px;
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.1);
        width: 230px;
        left: 105px;
    }
`;

export const InfoBoxMob = styled.div`
    font-size: 14px;
    display: block;

    @media (min-width: ${DevicesMinSizes.laptop}){
        display: none;
    }
`;