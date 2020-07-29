import styled from 'styled-components';
import {Input} from 'semantic-ui-react';

export const StyledTextFilter = styled(Input)`
    width: calc(100% - 16px);
    height: 56px;
    border-radius: 4px;
    border: solid 1px #cccccc;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    color: #bbbbbb;
    padding-left: 16px;
    display: flex;
    
    & input{
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
    }

    & img{
        height: 100%;
        width: 20px;
        background-color: white;
        border: none;
        margin-right: 16px;
    }
`;

export const StyledTextFilterIcon = styled.img`
    float: right;
    width: 14px;
    height: 14px;
    object-fit: contain;
    border: solid 0.5px #333333;
    background-color: #333333;
`;