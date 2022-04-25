import Contacts from "../types/contsctsTypes"
import { getContacts, ActionContactsTypes } from "../types/contsctsTypes/actionsType"

const initialState: Contacts = {
    contacts: []
}

export const contactsReducer = (state = initialState, action: getContacts) => {
    switch (action.type) {
        case ActionContactsTypes.GET_CONTACTS:
            return {...state, contacts: action.payload}
        default:
            return state
    }
}

export const getContactsAction = (payload: getContacts) => ({type: ActionContactsTypes.GET_CONTACTS, payload})
export const fetchContacts = () => ({type: ActionContactsTypes.FETCH_CONTACTS})