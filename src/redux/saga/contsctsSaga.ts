import axios from 'axios'
import {put, takeEvery, call} from 'redux-saga/effects'
import { ActionContactsTypes, getContacts } from '../types/contsctsTypes/actionsType'
import { getContactsAction } from '../reducers/contactsReducer'
import Contacts from '../types/contsctsTypes'

const fetchContacts = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
    return responce.data
}

function* fetchContactsWorker() {
    const data: getContacts = yield call(fetchContacts)
    yield put(getContactsAction(data))
}

export function* fetchContactsWatcher() {
    yield takeEvery(ActionContactsTypes.FETCH_CONTACTS, fetchContactsWorker)
}