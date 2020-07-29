import styled from 'styled-components';
import TickIcon from '../../assets/images/tick-icon.svg';
import CheckBox from '../../assets/images/box.svg';

export const StyledCheckbox = styled.div`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-image: url(${CheckBox});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`;

export const StyledCheckboxChecked = styled.div`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-image: url(${TickIcon}), url(${CheckBox});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`;