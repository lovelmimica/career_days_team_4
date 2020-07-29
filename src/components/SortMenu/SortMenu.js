import React, { useState, useEffect, useContext }  from 'react';
import ReactDOM from 'react-dom';
import {EventStatistics, StudentStatistics} from '../../lib/statistics';

//Styled components
import { StyledSortMenu, MenuHead, MenuItem } from './SortMenuStyle';

//Componenets
import StatisticsContext from '../Context/Context';


const SortMenu = (props) => {

    return(
        <>
            <StyledSortMenu>
                <MenuHead>Poredaj:</MenuHead>
                <MenuItem onClick={props.sortDefault}>Kronološki</MenuItem>
                <MenuItem onClick={props.sortAscesing}>{props.ascesingText}</MenuItem>
                <MenuItem onClick={props.sortDescesing}>{props.descesingText}</MenuItem>
            </StyledSortMenu>
        </>
    );
}

export default SortMenu;