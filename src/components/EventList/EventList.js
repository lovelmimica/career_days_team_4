import React, { useContext } from 'react';
import { useState, useEffect } from 'react';

//Styled components
import { StyledEventList, StyledEventLoading, ButtonWrapper } from './EventListStyle';

//Components
import Button from '../Button/Button';
import EventCard from '../EventCard/EventCard';
import Modal from '../Modal/Modal';
import ReviewForm from '../ReviewForm/ReviewForm';
import Context from '../Context/Context';

const EventList = (props) =>{
    const data = useContext(Context);

    return(
        <>
            <StyledEventList>
                {props.events ? props.events.map((event, index) =>
                        <EventCard
                            key={event.id}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            time={event.time}
                            freeSpaces={event.freeSpaces}
                            company={event.company}
                            description={event.description}
                            btnText={props.btnText}
                            btnOnClick={data.showModal}
                        />
                    ): <StyledEventLoading>Loading...</StyledEventLoading>
                }
                <ButtonWrapper><Button text="Prikaži više" /></ButtonWrapper>
            </StyledEventList>
            {data.modalOn && <Modal content={props.modalContent} heading={props.modalHeading} />}
        </>
        )
    }

export default EventList;
