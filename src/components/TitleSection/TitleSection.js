import React, { useContext, useState } from 'react';

//Styled components
import {
    StyledTitleSection,
    StyledTitleWrapper,
    StyledTitleHeader,
    StyledTitleFilter,
    StyledTitleTabMenu
} from './TitleSectionStyle';
import SortMenu from '../SortMenu/SortMenu';
import Context from '../Context/Context';

const TitleSection = (props) => {
    const data = useContext(Context);

    const [modalOn, setModalOn] = useState(false);

    const toggleModal = () => {
        setModalOn(!modalOn);
        console.log('Modal on');
    }

    return(
        <StyledTitleSection>
            <StyledTitleWrapper>
                <StyledTitleHeader>{props.title}</StyledTitleHeader>
                <StyledTitleFilter onClick={toggleModal} hide={props.title}>{props.filterText}
                </StyledTitleFilter>
                
            </StyledTitleWrapper>
            {modalOn && 
                       props.modal}
            <StyledTitleTabMenu>{props.children}</StyledTitleTabMenu>
        </StyledTitleSection>
    );
}

export default TitleSection;
