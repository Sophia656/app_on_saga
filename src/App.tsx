import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from './router/AppRouter';
import { useLocalStorage } from './components/hooks/useLocalStorage';
import { DataContext } from './context';
import { fetchContacts } from './redux/reducers/contactsReducer';
import { fetchTasks } from './redux/reducers/tasksReducer';
import Contacts from './redux/types/contsctsTypes';
import Tasks from './redux/types/tasksTypes';

interface ContactsState {
  contactsReducer: Contacts
}
interface TasksState {
  tasksReducer: Tasks
}

const App: FC = () => {
    const dispatch = useDispatch()
    const contacts = useSelector((state: ContactsState) => state.contactsReducer.contacts)
    const tasks = useSelector((state: TasksState) => state.tasksReducer.tasks)
    useEffect(() => {
        dispatch(fetchContacts())
        dispatch(fetchTasks())
    }, [])

    const [auth, setAuth] = useLocalStorage('auth', 'false')
    const [currentUser, setCurrentUser] = useLocalStorage('user', '0')
    const [currentId, setCurrentId] = useState('');
    console.log(currentId)
    return (
      <DataContext.Provider value={{contacts, tasks, auth, setAuth, currentId, setCurrentId, currentUser, setCurrentUser}}>
        <AppRouter />
      </DataContext.Provider>
    );
};

export default App;
