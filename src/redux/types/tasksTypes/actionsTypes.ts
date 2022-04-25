import Tasks from ".";

export interface getTasks {
    type: 'GET_TASKS',
    payload?: Tasks
}

export enum ActionTasksTypes {
    GET_TASKS = 'GET_TASKS',
    FETCH_TASKS = 'FETCH_TASKS'
}