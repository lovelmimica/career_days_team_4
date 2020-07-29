import React, { useContext } from 'react';

//Styled components
import { StyledEvidentionList, StyledList } from './EvidentionListStyle';

//Components
import EvidentionSearch from '../EvidentionSearch/EvidentionSearch';
import EvidentionEntry from '../EvidentionEntry/EvidentionEntry';
import Context from '../Context/Context';

const EvidentionList = (props) => {
    const data = useContext(Context);

    return(
        <StyledEvidentionList>
            <EvidentionSearch/>
            <StyledList>
                {
                    data.students.map((element, index) =>
                        <EvidentionEntry id={element.id} name={element.student} checked={element.id % 2 == 0} />
                     )
                }
                
            </StyledList>
        </StyledEvidentionList>
    );
}

export default EvidentionList;