import React from 'react';
import MyNavbar from '../../components/navbar/MyNavbar';
import PrivateRouter from '../../router/PrivateRouter';

const Main = () => {
    
    return (
        <div>
            <MyNavbar />
            <PrivateRouter />
        </div>
    );
};

export default Main;