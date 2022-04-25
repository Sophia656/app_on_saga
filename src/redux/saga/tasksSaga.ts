import axios from 'axios'
import {put, takeEvery, call} from 'redux-saga/effects'
import { getTasksAction } from '../reducers/tasksReducer'
import { ActionTasksTypes, getTasks } from '../types/tasksTypes/actionsTypes'

const fetchTasks = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return responce.data
}

function* fetchTasksWorker() {
    const data: getTasks = yield call(fetchTasks)
    yield put(getTasksAction(data))
}

export function* fetchTasksWatcher() {
    yield takeEvery(ActionTasksTypes.FETCH_TASKS, fetchTasksWorker)
}