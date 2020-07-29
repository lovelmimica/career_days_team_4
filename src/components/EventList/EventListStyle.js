import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledEventList = styled.div`
        @media (min-width: ${DevicesMinSizes.laptop}) {
            justify-self: center;
            align-self: flex-start;
        }
`;

export const StyledEventLoading = styled.p`
    margin-top: 0;
    text-align: center;
    font-size: 18px;
`;

export const ButtonWrapper = styled.div`
    width: 100%;

    @media (min-width: ${DevicesMinSizes.tablet}) {
        width: 232px;
        margin: 0 auto 32px;
    }

    @media (min-width: ${DevicesMinSizes.laptop}) {
        margin: 16px auto 24px;
    }
`;
