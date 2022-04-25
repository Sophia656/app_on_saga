import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DataContext } from '../context';
import LoginPage from '../pages/loginPage/LoginPage';
import Main from '../pages/main/Main';
import { publicRoutes } from './router';

const AppRouter = () => {
    const {auth} = useContext(DataContext);

    return (
        auth
        ? 
        <Routes>
            <Route path='*' element={<Main />} />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(router =>
                <Route 
                    element={router.element} 
                    path={router.path} 
                    // exact={router.exact} 
                    key={router.path}
                />  
            )}
            <Route path='/*' element={<LoginPage />} /> 
        </Routes>
    );
};

export default AppRouter;