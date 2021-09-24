import React from 'react'
import './Admin.css'

import {Navbar, Container, Nav, NavDropdown, Table, Dropdown} from 'react-bootstrap'
import { BsBookmarkPlus, BsBoxArrowRight } from 'react-icons/bs';
import { Icon } from '../../assets/assets';

import './Admin.css';

const Admin = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img className="icon-wow-admin" src={Icon} alt="icon wow admin"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Admin" id="basic-nav-dropdown">
                            <NavDropdown.Item className="drop-down-item" href="/add-book">
                                <BsBookmarkPlus className="icon-dropdown-admin"/> <span className="add-book-text">Add Book</span>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="drop-down-item" href="/">
                                <BsBoxArrowRight className="icon-dropdown-admin"/> Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <p className="admin-transaction-title">Incoming Transaction</p>
            <Table className="table-transaction" striped size="sm">
                <thead>
                    <tr>
                        <th className="table-cell align-middle">No</th>
                        <th className="table-cell align-middle">Users</th>
                        <th className="table-cell align-middle">Bukti Transfer</th>
                        <th className="table-cell align-middle">Remaining Active</th>
                        <th className="table-cell align-middle">Status User</th>
                        <th className="table-cell align-middle">Status Payment</th>
                        <th className="table-cell align-middle">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-cell align-middle">1</td>
                        <td className="table-cell align-middle">Gandha Saputra</td>
                        <td className="table-cell align-middle">bca.jpg</td>
                        <td className="table-cell align-middle">26 / Hari</td>
                        <td className="table-cell align-middle">Active</td>
                        <td className="table-cell align-middle">Approve</td>
                        <td className="table-cell align-middle">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle" variant="primary" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Approved</Dropdown.Item>
                                    <Dropdown.Item href="#">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-cell align-middle">2</td>
                        <td className="table-cell align-middle">Tria Aulia Sari</td>
                        <td className="table-cell align-middle">bni.jpg</td>
                        <td className="table-cell align-middle">26 / Hari</td>
                        <td className="table-cell align-middle">Active</td>
                        <td className="table-cell align-middle">Approve</td>
                        <td className="table-cell align-middle">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle" variant="primary" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Approved</Dropdown.Item>
                                    <Dropdown.Item href="#">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-cell align-middle">3</td>
                        <td className="table-cell align-middle">Angel Natasha</td>
                        <td className="table-cell align-middle">bri.jpg</td>
                        <td className="table-cell align-middle">0 Hari</td>
                        <td className="table-cell align-middle">Not Active</td>
                        <td className="table-cell align-middle">Cancel</td>
                        <td className="table-cell align-middle">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle" variant="primary" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Approved</Dropdown.Item>
                                    <Dropdown.Item href="#">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-cell align-middle">4</td>
                        <td className="table-cell align-middle">Joe Kevin</td>
                        <td className="table-cell align-middle">bsi.jpg</td>
                        <td className="table-cell align-middle">0 Hari</td>
                        <td className="table-cell align-middle">Not Active</td>
                        <td className="table-cell align-middle">Pending</td>
                        <td className="table-cell align-middle">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle" variant="primary" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Approved</Dropdown.Item>
                                    <Dropdown.Item href="#">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-cell align-middle">5</td>
                        <td className="table-cell align-middle">Talita</td>
                        <td className="table-cell align-middle">bkb.jpg</td>
                        <td className="table-cell align-middle">0 Hari</td>
                        <td className="table-cell align-middle">Not Active</td>
                        <td className="table-cell align-middle">Pending</td>
                        <td className="table-cell align-middle">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle" variant="primary" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Approved</Dropdown.Item>
                                    <Dropdown.Item href="#">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-cell align-middle">6</td>
                        <td className="table-cell align-middle">Rizky Febian</td>
                        <td className="table-cell align-middle">bkp.jpg</td>
                        <td className="table-cell align-middle">0 Hari</td>
                        <td className="table-cell align-middle">Not Active</td>
                        <td className="table-cell align-middle">Pending</td>
                        <td className="table-cell align-middle">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle" variant="primary" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Approved</Dropdown.Item>
                                    <Dropdown.Item href="#">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Admin
