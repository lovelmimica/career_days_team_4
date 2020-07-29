import styled from 'styled-components';
import {DevicesMinSizes} from '../../Sizes';

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-left: 16px;
    margin-right: 16px;

    @media (min-width: ${DevicesMinSizes.tablet}){
        padding: 0;
        margin-right: 40px;
        margin: 0;
    }

    @media (min-width: ${DevicesMinSizes.laptop}){
        display: grid;
        grid-template-columns: 35% 65%;
        justify-items: flex-start;
    }
`;