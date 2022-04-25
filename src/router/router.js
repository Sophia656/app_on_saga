import ContactsPage from '../pages/contacts/ContactsPage'
import TasksPage from "../pages/tasks/TasksPage"
import LoginPage from "../pages/loginPage/LoginPage"

export const privateRoutes = [
    {path: '/contacts', element: <ContactsPage />, exact: true},
    {path: '/tasks', element: <TasksPage />, exact: true}
]

export const publicRoutes = [
    {path: '/login', element: <LoginPage />, exact: true},
]