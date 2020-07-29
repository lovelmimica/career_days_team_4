import React from 'react';

//Styled components
import { StyledTableRow, Label, Content, CommentsLink, RowCell } from './TableRowStyle';
 
const TableRow = (props) => {
    return(
        <StyledTableRow className={props.className}>
            <RowCell className={props.className}>
                <Label>{props.titleLabel}</Label>
                <Content>{props.title}</Content>
            </RowCell>
            <RowCell className={props.className}>
                <Label>{props.dataLabel}</Label>
                <Content>{props.data}</Content>
            </RowCell>
            {props.linkDisplay == 'true' ?  
                <RowCell className={props.className}>
                    <CommentsLink onClick={props.showModal}>Pogledaj komentare</CommentsLink>
                </RowCell> : ''
             }

        </StyledTableRow>
    );
}

export default TableRow;