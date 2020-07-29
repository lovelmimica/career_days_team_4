import React, { useState, useContext } from 'react';
import {
    StyledEventCard,
    StyledEventHeader,
    StyledEventHeaderTitle,
    StyledEventHeaderExpand,
    StyledEventHeaderImage,
    StyledEventBody,
    StyledEventBodyWrapper,
    StyledEventBodyInfo,
    StyledEventBodyDescription,
    StyledEventBodyTitle,
    StyledEventBodyContent,
    StyledEventBodyButton
} from './EventCardStyle';

//Components
import Button from '../Button/Button';

//Assets
import arrowDown from '../../assets/images/arrow-down.png';
import arrowUp from '../../assets/images/arrow-up.png';
import Context from '../Context/Context';

const EventCard = (props) => {
    const data = useContext(Context);

    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    }

    return(
        <StyledEventCard expand={expand}>
            <StyledEventHeader>
                <StyledEventHeaderTitle>{props.title}</StyledEventHeaderTitle>
                <StyledEventHeaderExpand onClick={handleExpand}>
                    {!expand
                        ? <>
                            <StyledEventHeaderImage src={arrowUp} alt={arrowUp} />
                            <StyledEventHeaderImage src={arrowDown} alt={arrowDown} />
                        </> : <>
                            <StyledEventHeaderImage src={arrowDown} alt={arrowDown} />
                            <StyledEventHeaderImage src={arrowUp} alt={arrowUp} />
                        </>
                    }
                </StyledEventHeaderExpand>
            </StyledEventHeader>
            <StyledEventBody>
                <StyledEventBodyWrapper>
                    <StyledEventBodyInfo expand>
                        <StyledEventBodyTitle>Lokacija</StyledEventBodyTitle>
                        <StyledEventBodyContent>{props.location}</StyledEventBodyContent>
                    </StyledEventBodyInfo>
                    <StyledEventBodyInfo expand>
                        <StyledEventBodyTitle>Datum i vrijeme</StyledEventBodyTitle>
                        <StyledEventBodyContent>{props.date}</StyledEventBodyContent>
                        <StyledEventBodyContent>{props.time}</StyledEventBodyContent>
                    </StyledEventBodyInfo>
                    <StyledEventBodyInfo expand={expand}>
                        <StyledEventBodyTitle>Slobodna mjesta</StyledEventBodyTitle>
                        <StyledEventBodyContent>{props.freeSpaces}</StyledEventBodyContent>
                    </StyledEventBodyInfo>
                    <StyledEventBodyInfo expand={expand}>
                        <StyledEventBodyTitle>Firma</StyledEventBodyTitle>
                        <StyledEventBodyContent>{props.company}</StyledEventBodyContent>
                    </StyledEventBodyInfo>
                </StyledEventBodyWrapper>
                <StyledEventBodyDescription expand={expand}>
                    <StyledEventBodyTitle>Kratki opis</StyledEventBodyTitle>
                    <StyledEventBodyContent>{props.description}</StyledEventBodyContent>
                </StyledEventBodyDescription>
            </StyledEventBody>
            <StyledEventBodyButton>
                <Button onClick={props.btnOnClick} text={props.btnText}/>
            </StyledEventBodyButton>
        </StyledEventCard>
    );
}

export default EventCard;
