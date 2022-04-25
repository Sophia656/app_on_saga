import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes } from './router';

const PrivateRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(router =>
                <Route
                    element={router.element} 
                    path={router.path} 
                    // exact={router.exact}
                    key={router.path} 
                />
            )}
        </Routes>
    );
};

export default PrivateRouter;