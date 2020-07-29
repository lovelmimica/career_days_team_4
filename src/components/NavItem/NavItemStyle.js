import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {DevicesMinSizes} from '../../Sizes';

export const StyledNavItem = styled(NavLink)`
    padding-left: 16px;
    font-size: 24px;
    line-height: 36px;
    padding-top: 16px;
    text-decoration: none;
    color: #15698f;
    font-weight: bold;

    &.active{
        color: black;
    }

    @media (min-width: ${DevicesMinSizes.tablet}){
        padding: 0 0 0 0;
        margin-left: 32px;
        font-size: 18px;
        line-height: 26px;
        height: 100%;
        display: flex;
        align-items: center;
        color: black;

        &.active{
            border-bottom: 4px solid #15698f;
            margin-top:4px;
        }

        &.smallScreenOnly{
            display: none;
        }
    }
`;