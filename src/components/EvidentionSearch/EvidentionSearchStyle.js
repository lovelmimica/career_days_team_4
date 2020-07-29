import styled from 'styled-components';
import SearchIcon from '../../assets/images/search-icon.svg';

export const StyledEvidentionSearch = styled.input`
    border-radius: 4px;
    padding: 10px;
    border: solid 1px #cccccc;
    margin-bottom: 10px;
    width: calc(100% - 22px);
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: 98% 50%;
`;