import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledEventCard = styled.div`
    width: auto;
    height: auto;
    margin-bottom: 16px;
    border-radius: 4px;
    box-shadow: ${({expand}) => expand && "2px 2px 8px 0 rgba(0, 0, 0, 0.1)"};
    border: solid 2px ${({expand}) => expand ? "#15698f" : "#cccccc"};
    background-color: #ffffff;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        width: 688px;
        margin-bottom: 24px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        width: 832px !important;
        min-height: 498px;

        &:hover {
            box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.1);
            border: solid 2px #15698f;
        }
    }
`;

export const StyledEventHeader = styled.div`
    padding: 16px;
    border-bottom: 2px solid #cccccc;
    display: flex;
    justify-content: space-between;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        padding: 24px;
    }
`;

export const StyledEventHeaderTitle = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    color: #15698f;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        font-size: 24px;
    }
`;

export const StyledEventHeaderExpand = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column;

    @media (min-width: ${DevicesMinSizes.laptop}) {
        display: none;
    }
`;

export const StyledEventHeaderImage = styled.img`
    width: 12.5px;

    &:first-child {
        margin-bottom: 3px;
    }
`;

export const StyledEventBody = styled.div`
    padding: 16px;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        padding: 22px 24px 16px;
    }
`;

export const StyledEventBodyWrapper = styled.div`
    margin: 0;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        display: grid;
        grid-template-columns: 1.5fr 2fr 2fr 1fr;
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        width: 680px;
    }
`;

export const StyledEventBodyInfo = styled.div`
    margin-bottom: 16px;

    ${({expand}) => !expand && `
        display: none;
    `}

    @media (min-width: ${DevicesMinSizes.tablet}) {
        display: block;
    }
`;

export const StyledEventBodyDescription = styled.div`
    margin-bottom: 16px;

    ${({expand}) => !expand && `
        display: none;
    `}

    @media (min-width: ${DevicesMinSizes.tablet}) {
        margin-top: 16px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        width: 720px;
        display: block;
        margin-top: 32px;
    }
`;

export const StyledEventBodyTitle = styled.h3`
    margin-top: 0px;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.63;
    color: #333333;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        line-height: 1.44;

        @media (min-width: ${DevicesMinSizes.laptop}) {
            margin-bottom: 8px !important;
        }
    }
`;

export const StyledEventBodyContent = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
`;

export const StyledEventBodyButton = styled.div`
    width: auto;
    margin: 0 16px 16px;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        width: 232px;
        height: 56px;
        margin: 0 auto 32px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        margin: 16px auto 19px;
    }
`;