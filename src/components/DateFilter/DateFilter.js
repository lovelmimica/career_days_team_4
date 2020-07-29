import React, {useState} from 'react';
import hr from 'date-fns/locale/hr';


//Styled components
import { StyledDateFilter, Wrapper } from './DateFilterStyle';
import { registerLocale } from 'react-datepicker';

const DateFilter = () => {
    registerLocale("hr", hr);
    const [startDate, setStartDate] = useState(new Date());

    return(
        <Wrapper><StyledDateFilter dateFormat='dd.MM. (EEEE)' locale='hr' selected={startDate} onChange={date => setStartDate(date)}/></Wrapper>
    );
}

export default DateFilter;