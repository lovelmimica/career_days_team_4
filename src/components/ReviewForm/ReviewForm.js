import React, { useContext } from 'react';

//Styled components
import { StyledReviewForm, StyledReviewFormTextarea } from './ReviewFormStyle';
import { ModalButtonWrapper } from '../Modal/ModalStyle';
import Context from '../Context/Context';

//Components
import Button from '../Button/Button';
import ReviewScore from '../ReviewScore/ReviewScore';

const ReviewForm = (props) => {
    const data = useContext(Context);

    const closeMenu = () =>{
        data.closeModal();
    }
    return(
        <StyledReviewForm>
            <p><strong>Ime događaja:</strong></p>
            <p>{props.ime} Kreiraj svoju Pokedex aplikaciju uz ReactJS</p>
            <p><strong>Komentar:</strong></p>
            <StyledReviewFormTextarea rows="5" cols="30" name="komentar" >
                Predavanje je bilo odlično, također sam mnogo toga naučio. Veselim se sljedećem sličnom predavanju na FOI-u.
            </StyledReviewFormTextarea>
            <p><strong>Ocijeni događaj:</strong></p>

            <ReviewScore/>

            <ModalButtonWrapper><Button text="Spremi" onClick={closeMenu} /></ModalButtonWrapper>
        </StyledReviewForm>
    );
}

export default ReviewForm;