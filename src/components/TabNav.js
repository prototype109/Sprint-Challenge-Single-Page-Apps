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
                <h2><Icon name='home' size='small'/>Home</h2>
            </NavLink>
            <NavLink to='/characters' activeClassName='activeBackground'>
                <h2><Icon name='group' size='small'/>Characters</h2>
            </NavLink>
            <NavLink to='/locations' activeClassName='activeBackground'>
                <h2><Icon name='map outline' size='small'/>Location</h2>
            </NavLink>
            <NavLink to='/episodes' activeClassName='activeBackground'> 
                <h2><Icon name='video' size='small'/>Episodes</h2>
            </NavLink>
        </TabStyle>
    );

};
