import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledDateFilter = styled(DatePicker)`
    width: calc(100% - 16px);
    height: 56px;
    border-radius: 4px;
    border: solid 1px #cccccc;
    background-color: #ffffff;
    padding-left: 16px;
`;

export const Wrapper = styled.div`
    & .react-datepicker-wrapper{
        display: flex;
    }
`;

