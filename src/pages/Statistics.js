import React, { useState, useEffect } from 'react';
import TitleSection from '../components/TitleSection/TitleSection';
import { useContext } from 'react';

//Components 
import Main from './../components/Main/Main';
import Header from './../components/Header/Header';
import DataTable from '../components/DataTable/DataTable';
import Modal from '../components/Modal/Modal';
import CommentForm from '../components/CommentForm/CommentForm';
import TabMenu from '../components/TabMenu/TabMenu';
import Context from '../components/Context/Context';
import SortMenu from '../components/SortMenu/SortMenu';

const Statistics = () =>{
    const [activeTab, setActiveTab] = useState();
    const data = useContext(Context);
    useEffect(() => setActiveTab('events'), []);

    useEffect(() => {
        document.title ="Statistika";
    }, []);

    const handleChange = (value) => {
        if(value == 'left') setActiveTab('events');
        else if(value == 'right') setActiveTab('students');
    }

    const navItems = [{to: '/evidence', text: 'Evidencija', bigScreens: true}, {to: '/statistics', text: 'Statistika', bigScreens: true}];

    return(
        <>
            <Header navItems={navItems}/>
            <TitleSection title="Statistika" filterText="Poredaj" 
                modal={
                <SortMenu 
                    ascesingText='Abecedno uzlazno' 
                    sortAscesing={data.sortEventsByTitleAsc}  
                    descesingText='Abecedno silazno'
                    sortDescesing={data.sortEventsByTitleDesc}
                    sortDefault={data.sortEventsByIdAsc}/>
            }>
                <TabMenu
                    activeTab={activeTab == 'students' ? 'right' : 'left'}
                    handleChange={handleChange}
                    leftTabText="Događaji"
                    rightTabText="Studenti"
                /> 
            </TitleSection>
                <Main>
                    <DataTable type={activeTab} />
                </Main>
            </>
    );
}

export default Statistics;