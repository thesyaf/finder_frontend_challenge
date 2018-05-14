import React from 'react';
import { Nav, NavLink } from 'reactstrap';


export default function Navigation() {

    return (
        <Nav color="light" pills>
            <NavLink active>Home</NavLink>
            <NavLink>Members</NavLink>
            <NavLink>Photos</NavLink>
            <NavLink>Pages</NavLink>
            <NavLink>Discussions</NavLink>
            <NavLink>More</NavLink>              
        </Nav>
    );
};