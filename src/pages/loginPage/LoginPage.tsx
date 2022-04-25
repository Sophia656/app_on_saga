import React, { useContext, useState } from 'react';
import { Alert, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useLocalStorage } from '../../components/hooks/useLocalStorage';
import { DataContext } from '../../context';
import { contact } from '../../redux/types/contsctsTypes';

const LoginPage = () => {
    const [validated, setValidated] = useState(false);
    const {auth, setAuth, contacts, currentId, setCurrentId, setCurrentUser} = useContext(DataContext);
    const [currentLogin, setCurrentLogin] = useState('');
    
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const even = (element: contact) => element.username === currentLogin && element.id === Number(currentId)
        contacts?.some(even) === true ? setAuth(!auth) && setValidated(true) : setValidated(false)
        if (contacts?.some(even) === true) {
            setAuth(!auth)
            setValidated(true)
            setCurrentUser(currentId)
        }
    };

    return (
        <Form style={{display: 'flex', width: '100vw', height: '90vh', alignItems: 'center', justifyContent: 'center'}} noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3" style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
            <Form.Group as={Col} md="30" controlId="validationCustomUsername">
            <Form.Label>Login</Form.Label>
            <InputGroup hasValidation>
                <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                value={currentLogin}
                onChange={e => setCurrentLogin(e.target.value)}
                />
            </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="30" controlId="validationCustomPassword">
            <Form.Label>UserId</Form.Label>
            <InputGroup hasValidation>
                <Form.Control
                type="password"
                placeholder="UserId"
                aria-describedby="inputGroupPrepend"
                required
                value={currentId}
                onChange={e => setCurrentId(e.target.value)}
                />
            </InputGroup>
            </Form.Group>
            <Button style={{marginTop: '2vh'}} type="submit">Enter</Button>
        </Row>
        </Form>
    );
};

export default LoginPage;