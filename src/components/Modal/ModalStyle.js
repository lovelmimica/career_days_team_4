import styled from 'styled-components';
import {DevicesMinSizes} from '../../Sizes';
import CloseIcon from '../../assets/images/close-cross-in-circular-outlined-interface-button.svg';

export const StyledModal = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    font-size: 16px;
    z-index: 1000;

`;

export const StyledModalInner = styled.div`
    border-radius: 8px;
    background-color: white;
    max-width: 90%;
    max-height: 90%;
    font-size: 16px;
    overflow: hidden;
    @media (min-width: ${DevicesMinSizes.tablet}){
        width: 55%;
    }
    @media (min-width: ${DevicesMinSizes.laptop}){
        width: 40%;
    }
`;

export const StyledModalHeading = styled.div`
    border-radius: 8px 8px 0px 0px;
    padding: 15px 40px;
    background-color: #15698f;
    font-size: 22px;
    color: white;
    text-align: center;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-column-start: 2;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const StyledModalCloseButton = styled.div`
    width: 16px;
    height: 16px;
    padding: 6px 6px 6px 6px;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    cursor: pointer;
    right: 16px;
    z-index: 1001;
    justify-self: end;
`;

export const StyledModalContent = styled.div`

`;

export const ModalButtonWrapper = styled.div`
    width: auto;
    @media (min-width: ${DevicesMinSizes.tablet}){
        margin: auto;
        width: 232px;
        height: 56px;
    }
`;

export const StyledModalTitle = styled.span`
    grid-column-start: 2;
`;