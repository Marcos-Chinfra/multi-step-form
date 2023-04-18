import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer'


const Layout = ({ children }) => {

    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

useEffect(() => {
    function handleSize() {
        setDisplayWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
}, []);

    return (
        <div className='w-screen relative h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'>
        <Header />
        <div className="p-3 w-11/12 rounded-lg bg-White absolute top-20 center-main md:h-1/2 md:top-32 lg:max-w-screen-sm lg:static lg:h-2/3 lg:border-16 lg:border-white lg:rounded-l-none ">
            {children}
            {/* {displayWidth > 1024 ? <Footer /> : ''} */}
        </div>
        {/* {displayWidth < 1024 ? <Footer /> : ''} */}
    </div>
    )
    };

export default Layout;
