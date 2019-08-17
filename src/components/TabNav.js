import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

// TODO: Add missing tabs below
export default function TabNav() {

    const TabStyle = styled.div`
        display: flex;
        justify-content: space-around;
    `;

    return(
        <TabStyle>
            <NavLink exact={true} to='/' activeClassName='activeBackground'>
                Home
            </NavLink>
            <NavLink to='/characters' activeClassName='activeBackground'>
                Characters
            </NavLink>
            <NavLink to='/locations' activeClassName='activeBackground'>
                Location
            </NavLink>
            <NavLink to='/episodes' activeClassName='activeBackground'>
                Episodes
            </NavLink>
        </TabStyle>
    );

};
