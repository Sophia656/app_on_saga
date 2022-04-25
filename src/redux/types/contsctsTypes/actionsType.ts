import Contacts from ".";

export interface getContacts {
    type: 'GET_CONTACTS',
    payload?: Contacts
}


export enum ActionContactsTypes {
    GET_CONTACTS = 'GET_CONTACTS',
    FETCH_CONTACTS = 'FETCH_CONTACTS'
}