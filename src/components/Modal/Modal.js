import React, { useContext } from 'react';

//Styled components
import { StyledModal, StyledModalInner, StyledModalHeading, StyledModalCloseButton, StyledModalContent, StyledModalTitle } from './ModalStyle';
import Context from '../Context/Context';

const Modal = (props) =>{
    const data = useContext(Context);

    const closeMenu = () =>{
        data.closeModal();
    }

    return(
        <StyledModal >
            <StyledModalInner >
                <StyledModalHeading>
                    <StyledModalTitle>{props.heading}</StyledModalTitle>
                    <StyledModalCloseButton onClick={closeMenu}/>
                </StyledModalHeading>
                <StyledModalContent>
                    {props.content}
                </StyledModalContent>
            </StyledModalInner>
        </StyledModal>
    );
}

export default Modal;