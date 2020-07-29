import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledTabMenu = styled.div`
    display: flex;
    margin-top: 24px;

    @media (min-width: ${DevicesMinSizes.laptop}) {
        margin: 0;
        width: 360px;
    }
`;

export const StyledTabButton = styled.p`
    margin: 0 auto;
    width: 100%;
    padding: 16px 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 2px ${({active}) => active ? "#15698f" : "#cccccc"};
    color: ${({active}) => active ? "#15698f" : "#cccccc"};

    &:first-child {
        border-radius: 4px 0 0 4px;
    }

    &:last-child {
        border-radius: 0 4px 4px 0;
    }
`;
