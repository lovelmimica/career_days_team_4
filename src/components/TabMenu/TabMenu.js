import React, { useState } from 'react';
//Styled components
import {
    StyledTabMenu,
    StyledTabButton
} from './TabMenuStyle';

const TabMenu = (props) => {
    return(
        <StyledTabMenu>
            <StyledTabButton
                onClick={() => props.handleChange("left")}
                active={props.activeTab === "left" && true}>
                    {props.leftTabText}
            </StyledTabButton>
            <StyledTabButton
                onClick={() => props.handleChange("right")}
                active={props.activeTab === "right" && true}>
                    {props.rightTabText}
            </StyledTabButton>
        </StyledTabMenu>
    );
}

export default TabMenu;