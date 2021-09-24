import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';


const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" expand="lg">
            <Link to="/" className="navbar-brand">Exercise Tracker</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">Exercises</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/create">Create Exercise Log</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/user">Create User</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;