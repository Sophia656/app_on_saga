import {all} from 'redux-saga/effects'
import { fetchContactsWatcher } from './contsctsSaga'
import { fetchTasksWatcher } from './tasksSaga'

export function* rootWatcher() {
    yield all([fetchContactsWatcher(), fetchTasksWatcher()])
}