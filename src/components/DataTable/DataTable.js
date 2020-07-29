import React,  { useState, useContext } from 'react';
import {EventStatistics, StudentStatistics} from '../../lib/statistics';

//Styled components
import { StyledDataTable, TableHead, HeadCell, SortIcon, SortWrapper } from './DataTableStyle';

//Components
import TableRow from '../TableRow/TableRow';
import SortMenu from '../SortMenu/SortMenu';
import Context from '../Context/Context';

//Images
import SortIconTitle from '../../assets/images/sort-icon-1.svg';
import SortIconRating from '../../assets/images/sort-icon-2.svg';
import { useEffect } from 'react';
import Modal from '../Modal/Modal';
import CommentForm from '../CommentForm/CommentForm';

const DataTable = (props) => {
    const data = useContext(Context);

    const [titleSortMenuDisplayed, setTitleSortMenuDisplayed] = useState(false);
    const [ratingSortMenuDisplayed, setRatingSortMenuDisplayed] = useState(false);
    const [attendanceSortMenuDisplayed, setAttendanceSortMenuDisplayed] = useState(false);

    const toggleTitleSortMenu = () => {
        setTitleSortMenuDisplayed(!titleSortMenuDisplayed);
    }

    const toggleRatingSortMenu = () => {
        setRatingSortMenuDisplayed(!ratingSortMenuDisplayed);
    }

    const toggleAttendanceSortMenu = () => {
        setAttendanceSortMenuDisplayed(!attendanceSortMenuDisplayed);
    }

    return(
        <>
            {props.type == 'events' && <StyledDataTable className='events'>
                <TableHead className='events' >
                    <HeadCell>Naziv događaja
                        <SortWrapper><SortIcon onClick={toggleTitleSortMenu} src={SortIconTitle}/>
                        {titleSortMenuDisplayed && 
                        <SortMenu 
                            ascesingText='Abecedno uzlazno' 
                            sortAscesing={data.sortEventsByTitleAsc}  
                            descesingText='Abecedno silazno'
                            sortDescesing={data.sortEventsByTitleDesc}
                            sortDefault={data.sortEventsByIdAsc}/>}
                        </SortWrapper>
                    </HeadCell>
                    <HeadCell>Prosječna ocjena
                        <SortWrapper><SortIcon onClick={toggleRatingSortMenu} src={SortIconRating}/>
                        {ratingSortMenuDisplayed && 
                            <SortMenu 
                                ascesingText='Po prosječnoj ocjeni uzlazno' 
                                descesingText='Po prosječnoj ocjeni silazno'
                                sortAscesing={data.sortEventsByRatingAsc}
                                sortDescesing={data.sortEventsByRatingDesc}
                                sortDefault={data.sortEventsByIdAsc} />
                                }
                            </SortWrapper></HeadCell>
                    <HeadCell>Komentari</HeadCell>
                </TableHead>
                {data.events.map((event, index) => (
                    <TableRow className='events' key={event.id} titleLabel='Naziv događaja:' title={event.title} dataLabel='Prosječna ocjena:' data={event.avgRating} linkDisplay='true' showModal={data.showModal} />
                ))}
            </StyledDataTable>}
            
            {props.type == 'students' && <StyledDataTable className='students'>
                <TableHead className='students'>
                    <HeadCell className='students'>Ime i prezime</HeadCell>
                    <HeadCell className='students'>Broj sudjelovanja
                        <SortWrapper>
                            <SortIcon onClick={toggleAttendanceSortMenu} src={SortIconRating}/>
                            {attendanceSortMenuDisplayed && 
                            <SortMenu 
                                ascesingText='Po broju sudjelovanja uzlazno' 
                                descesingText='Po broju sudjelovanja silazno'
                                sortAscesing={data.sortStudentsByAttendenceAsc}
                                sortDescesing={data.sortStudentsByAttendenceDesc}
                                sortDefault={data.sortStudentsByIdAsc} />}
                            </SortWrapper></HeadCell>
                </TableHead>
                {data.students.map((student, index) => (
                    <TableRow className='students' key={student.id} titleLabel='Ime i prezime:' title={student.student} dataLabel='Broj sudjelovanja:' data={student.participationCount} linkDisplay='false'/>
                ))}
            </StyledDataTable>}
            
            {data.modalOn && <Modal content={<CommentForm/>} heading="Komentari" />}
        </>
    );
}

export default DataTable;