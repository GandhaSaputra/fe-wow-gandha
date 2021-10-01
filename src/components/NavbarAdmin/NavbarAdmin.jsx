import React, { useContext } from 'react'



import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { BsBookmarkPlus, BsBoxArrowRight, BsPeopleCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Icon } from '../../assets/assets';
import { UserContext } from '../../config/UserContext/UserContext';

const NavbarAdmin = () => {

    const[state, dispatch] = useContext(UserContext)

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    const dropDownIcon = (<BsPeopleCircle style={{height:"20px", width:"70px"}}/>)

    return (
        <Navbar bg="transparent" expand="lg">
                <Container>
                    <Link to="/admin">
                        <Navbar.Brand><img className="icon-wow-admin" src={Icon} alt="icon wow admin"/></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title={dropDownIcon} className="admin-acc-icon" id="basic-nav-dropdown">
                            <NavDropdown.Item className="drop-down-item">
                                <Link to="/add-book" className="link-add-book">
                                    <BsBookmarkPlus className="icon-dropdown-admin"/> <span className="add-book-text">Add Book</span>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="drop-down-item" onClick={handleLogout}>
                                <BsBoxArrowRight className="icon-dropdown-admin" /> Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavbarAdmin
