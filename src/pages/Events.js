import React, { useState, useContext } from 'react';

//Components
import Main from './../components/Main/Main';
import Header from './../components/Header/Header';
import TitleSection from './../components/TitleSection/TitleSection';
import FilterBox from './../components/FilterBox/FilterBox';
import EventList from './../components/EventList/EventList';
import TabMenu from '../components/TabMenu/TabMenu';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import Context from '../components/Context/Context';

//Dummy data
import { AllEvents, MyEvents } from '../lib/events';
import { useEffect } from 'react';


const Events = () => {
    const [events, setEvents] = useState();
    const [btnText, setBtnText] = useState();
    const [activeTabMenu, setActiveTabMenu] = useState("left");
    const data = useContext(Context);

    useEffect(() => {
        document.title ="Događaji";
        if (activeTabMenu === "left") {
            setEvents(AllEvents);
            setBtnText('Prijavi se');
            data.toggleFilterType('all');
        } else if (activeTabMenu === "right") {
            setEvents(MyEvents);
            setBtnText('Odjava');
            data.toggleFilterType('status');
        }
    }, [activeTabMenu]);

    const handleChange = (value) => {
        setActiveTabMenu(value);
    }

    const navItems = [{to: '/events', text: 'Događaji', bigScreens: false}];

    return(
        <>
            <Header navItems={navItems} />
            <TitleSection title="Događaji" filterText={data.filterType == 'all' ? 'Filtriraj' : 'Status'}
                modal={<FilterBox className='tabMenuEventsFilters' type={data.filterType} />}
            >
                <TabMenu
                    activeTab={activeTabMenu}
                    handleChange={handleChange}
                    leftTabText="Svi događaji"
                    rightTabText="Moji događaji"
                />
            </TitleSection>
            <Main>
                <FilterBox type={data.filterType} />
                <EventList events={events} btnText={btnText} modalContent={<ReviewForm/>} modalHeading='Ocijeni događaj' />
            </Main>
        </>
    );
}

export default Events;