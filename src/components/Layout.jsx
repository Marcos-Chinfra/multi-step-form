import React from 'react';
import Header from './Header';

const Layout = ( { children } ) => {
    return (
        <div className='w-screen relative border rounded mx-auto h-screen flex flex-col'>
            <Header />
            <div className="bg-White w-4/5 rounded border absolute top-20 left-8">
                {children}
            </div>
        </div>
    );
}

export default Layout;