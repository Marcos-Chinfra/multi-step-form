import React from 'react';
import Header from './Header';

const Layout = ( { children } ) => {
    return (
        <div className='w-screen relative border rounded mx-auto h-screen flex flex-col'>
            <Header />
            <div className="bg-White w-11/12 rounded border absolute top-20 left-4 p-3">
                {children}
            </div>
        </div>
    );
}

export default Layout;