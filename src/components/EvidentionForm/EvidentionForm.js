import React, { useContext } from 'react';

//Styled components
import { StyledEvidentionForm, StyledEvidentionFormList } from './EvidentionFormStyle';
import { ModalButtonWrapper } from '../Modal/ModalStyle';
import Context from '../Context/Context';

//Components
import Button from '../Button/Button';
import EvidentionList from '../EvidentionList/EvidentionList';
import EvidentionCounter from '../EvidentionCounter/EvidentionCounter';

const EvidentionForm = (props) => {
    const data = useContext(Context);

    const closeMenu = () =>{
        data.closeModal();
    }
    return(
        <StyledEvidentionForm>
            <p><strong>Ime događaja:</strong></p>
            <p>Kreiraj svoju Pokedex aplikaciju uz ReactJS</p>
            <p><strong>Prijavljeni polaznici:</strong> <EvidentionCounter/></p>
            <StyledEvidentionFormList>
                <EvidentionList />
            </StyledEvidentionFormList>
            <ModalButtonWrapper><Button text="Spremi" onClick={closeMenu} /></ModalButtonWrapper>
        </StyledEvidentionForm>
    );
}

export default EvidentionForm;