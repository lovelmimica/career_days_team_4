import React, { useState, useEffect } from 'react';

//Components
import Main from './../components/Main/Main';
import Header from './../components/Header/Header';
import TitleSection from './../components/TitleSection/TitleSection';
import FilterBox from './../components/FilterBox/FilterBox';
import EventList from './../components/EventList/EventList';
import EvidentionForm from '../components/EvidentionForm/EvidentionForm';
import Modal from '../components/Modal/Modal';
import TabMenu from '../components/TabMenu/TabMenu';
import { AllEvents, MyEvents } from '../lib/data';


const Evidence = () => {
    const [events, setEvents] = useState();
    const [activeTabMenu, setActiveTabMenu] = useState("left");
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title ="Evidencija polaznika";
        if (activeTabMenu === "left") {
            setEvents(AllEvents);
        } else if (activeTabMenu === "right") {
            setEvents(MyEvents);
            console.log(MyEvents);
        }
    }, [activeTabMenu]);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setTitle ('Evidencija');
        }
        else {
            setTitle('Evidencija polaznika');
        }
    }, [window.innerWidth]);

    const handleChange = (value) => {
        setActiveTabMenu(value);
    }

    const navItems = [{to: '/evidence', text: 'Evidencija', bigScreens: true}, {to: '/statistics', text: 'Statistika', bigScreens: true}];
    
    return(
        <>
            <Header navItems={navItems}/>
            <TitleSection title={title} filterText="Filtriraj"
                modal={<FilterBox className='tabMenuEventsFilters' type='all' />}>
                </TitleSection>
            <Main>
                <FilterBox type='all' />
                <EventList events={events} btnText='Evidentiraj' modalContent={<EvidentionForm />} modalHeading='Evidentiraj polaznike' />  
            </Main>
        </>
    );
}

export default Evidence;