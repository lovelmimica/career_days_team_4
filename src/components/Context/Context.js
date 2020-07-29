import React, {createContext, useState, useContext, useEffect} from 'react';
import {EventStatistics, StudentStatistics} from '../../lib/statistics';
import {Students, AllEvents, MyEvents, Comments} from '../../lib/data';

const Context = createContext();

export const ContextProvider = (props) => {
    const eventData = AllEvents;
    const studentData = Students;
    const myEventData = MyEvents;
    const commentData = Comments;
    let filterType= 'all' ;

    const toggleFilterType = (type) =>{
        
        filterType = type;
        
        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': false,
            'myEventsOn': false,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': false,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const showStudentStatistics = () => {
           
        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': true,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': false,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const showEventStatistics = () => {
           
        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': false,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': false,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }
    
    const showModal = () => {

        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': true,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const closeModal = () => {

        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': false,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortEventsByTitleAsc = () => {
        eventData.sort((a, b) => {
            return a.title.localeCompare(b.title)
        });

        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortEventsByTitleDesc = () => {
        eventData.sort((a, b) => {
            return b.title.localeCompare(a.title)
        });

        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortEventsByIdAsc = () => {
        eventData.sort((a, b) => {
            return a.id - b.id;
        });
        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortEventsByRatingAsc = () => {
        eventData.sort((a, b) => {
            return a.avgRating - b.avgRating;
        });

        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortEventsByRatingDesc = () => {
        eventData.sort((a, b) => {
            return b.avgRating - a.avgRating;
        });

        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortStudentsByAttendenceAsc = () => {
        studentData.sort((a, b) => {
            return a.participationCount - b.participationCount;
        });

        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortStudentsByAttendenceDesc = () => {
        studentData.sort((a, b) => {
            return b.participationCount - a.participationCount;
        });
        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const sortStudentsByIdAsc = () => {
        studentData.sort((a, b) => {
            return a.id - b.id;
        });
        console.log(state);
        setState({
            'showStudentStatistics': showStudentStatistics,
            'showEventStatistics': showEventStatistics,
            'commentData': commentData,
            'studentStatisticsOn': state.studentStatisticsOn,
            'myEventsOn': state.myEventsOn,
            'myEvents' : myEventData,
            'events': eventData, 
            'students': studentData, 
            'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
            'sortEventsByTitleDesc' : sortEventsByTitleDesc,
            'sortEventsByIdAsc' : sortEventsByIdAsc,
            'sortEventsByRatingAsc' : sortEventsByRatingAsc,
            'sortEventsByRatingDesc' : sortEventsByRatingDesc,
            'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
            'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
            'sortStudentsByIdAsc' : sortStudentsByIdAsc,
            'modalOn': state.modalOn,
            'showModal': showModal,
            'closeModal': closeModal,
            'filterType': filterType,
            'toggleFilterType': toggleFilterType
        });
    }

    const value = {
        'showStudentStatistics': showStudentStatistics,
        'showEventStatistics': showEventStatistics,
        'commentData': commentData,
        'studentStatisticsOn': false,
        'myEventsOn': false,
        'myEvents' : myEventData,
        'events': eventData, 
        'students': studentData, 
        'sortEventsByTitleAsc' : sortEventsByTitleAsc, 
        'sortEventsByTitleDesc' : sortEventsByTitleDesc,
        'sortEventsByIdAsc' : sortEventsByIdAsc,
        'sortEventsByRatingAsc' : sortEventsByRatingAsc,
        'sortEventsByRatingDesc' : sortEventsByRatingDesc,
        'sortStudentsByAttendenceAsc' : sortStudentsByAttendenceAsc, 
        'sortStudentsByAttendenceDesc' : sortStudentsByAttendenceDesc,
        'sortStudentsByIdAsc' : sortStudentsByIdAsc,
        'modalOn': false,
        'showModal': showModal,
        'closeModal': closeModal,
        'filterType': filterType,
        'toggleFilterType': toggleFilterType
    };

    const [state, setState] = useState(value);    

    return(
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;
