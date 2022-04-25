import Tasks from "../types/tasksTypes";
import { ActionTasksTypes, getTasks } from "../types/tasksTypes/actionsTypes";

const initialState: Tasks = {
    tasks: []
}

export const tasksReducer = (state = initialState, action: getTasks) => {
    switch(action.type) {
        case ActionTasksTypes.GET_TASKS:
            return {...state, tasks: action.payload}
        default:
            return state
    }
}

export const getTasksAction = (payload: getTasks) => ({type: ActionTasksTypes.GET_TASKS, payload})
export const fetchTasks = () => ({type: ActionTasksTypes.FETCH_TASKS})