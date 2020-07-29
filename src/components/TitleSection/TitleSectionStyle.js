import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledTitleSection = styled.div`
    margin: 24px 16px;
    width: calc(100% -32px);

    @media (min-width: ${DevicesMinSizes.tablet}) {
        margin: 20px 16px 24px;
        margin-left: 40px;
        margin-right: 40px;
        width: calc(100% - 80px);
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        margin-bottom: 80px;
        width: calc(100% - 216px);
        grid-column-start: 1;
        grid-column-end: 2;
        margin-left: 108px;
        margin-right: 108px;
    }
`;

export const StyledTitleWrapper = styled.div`
    margin: 0;
    display: flex;
    justify-content: space-between;
`;

export const StyledTitleHeader = styled.h1`
    margin: auto 0;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.86;
    color: #333333;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        font-size: 36px;
        line-height: 1.5;
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        margin-bottom: 0;
    }
`;

export const StyledTitleFilter = styled.a`
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #333333;
    display: flex;
    align-items: center;

    & > div{
        top: 140px;
    }

    @media (min-width: ${DevicesMinSizes.tablet}) {
        font-size: 18px;
        line-height: 1.44;

        ${({hide}) => hide === "Statistika" && `
            display: none;
        `}
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        display: none;
    }
`;

export const StyledTitleTabMenu = styled.div`
    margin: 0;
`;
