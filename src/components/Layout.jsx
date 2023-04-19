import React from 'react';
import Header from './Header';


const Layout = ({ children }) => {
    return (
        <div className='w-screen relative h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'>
        <Header />
        <div className="p-3 w-11/12 rounded-lg bg-White absolute top-20 center-main md:h-1/2 md:top-32 lg:max-w-screen-sm lg:static lg:h-2/3 lg:border-16 lg:border-white lg:rounded-l-none ">
            {children}
        </div>
    </div>
    )
    };

export default Layout;
