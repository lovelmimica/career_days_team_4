import styled from 'styled-components';
import {DevicesMinSizes} from '../../Sizes';

export const StyledHeader = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        margin-left: 40px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        margin-left: 108px;
    }
`;

export const LogoImage = styled.img`
`;

export const LogoText = styled.span`
    display: none;
    @media (min-width: ${DevicesMinSizes.laptop}) {
        display: inline;
        font-size: 18px;
        font-weight: bold;
        width: 400px;
        margin-left: 18px;
    }
`;