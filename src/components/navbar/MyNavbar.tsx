import React, { FC, useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { DataContext } from '../../context';

const MyNavbar: FC = () => {
    const {setAuth, auth} = useContext(DataContext)
    const handleExit = () => {
        setAuth(!auth)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">MYAPP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                    <Nav.Link href="/tasks">TASKS</Nav.Link>
                </Nav>
                <Button onClick={handleExit} variant="primary">Exit</Button>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;