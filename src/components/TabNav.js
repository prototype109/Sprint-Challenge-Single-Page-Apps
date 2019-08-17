import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

    return(
        <Menu>
            <Tab.Pane>
                <NavLink to='/'>
                    Home
                </NavLink>
            </Tab.Pane>
            <Tab.Pane>
                <NavLink to='/characters'>
                    Characters
                </NavLink>
            </Tab.Pane>
            <Tab.Pane>
                <NavLink to='/locations'>
                    Location
                </NavLink>
            </Tab.Pane>
        </Menu>
    );

};
