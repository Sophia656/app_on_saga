import React, { FC, useContext } from 'react';
import { Table } from 'react-bootstrap';
import { DataContext } from '../../context';
import { contact } from '../../redux/types/contsctsTypes';

const Main: FC = () => {
    const {contacts, currentUser} = useContext(DataContext);
    const currentContacts = contacts.filter((contact: contact) => contact.id != currentUser)
    
    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Mail</th>
            </tr>
            </thead>
            <tbody>
                {currentContacts.map((contact: contact, index: number) =>
                    <tr key={contact.id}>
                        <td>{index + 1}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};

export default Main;