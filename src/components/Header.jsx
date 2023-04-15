import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    return (
        <header className='h-1/4 rounded-none bg-mobile bg-center bg-no-repeat bg-cover lg:h-2/3 lg:w-72 lg:bg-desktop lg:border-16 lg:border-white lg:rounded-l-md '>
            <ul className='h-full w-1/2 mx-auto flex mt-8 justify-between text-white lg:flex-col lg:m-0 lg:items-start lg:justify-start lg:w-full lg:h-2/3 lg:gap-8 lg:py-9 lg:px-8'>
                <li className='lg:flex gap-2'>
                    <Link to={'/'} className={`flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center font-medium text-sm lg:mr-2 ${location.pathname == '/' ? "bg-Pastel-blue" : ""}`}>1</Link>
                    <div className='hidden lg:flex lg:flex-col  '>
                        <span className='text-Cool-gray font-normal text-xs'>STEP 1</span>
                        <h4 className='font-bold text-sm'>YOUR INFO</h4>
                    </div>
                </li>
                <li className='lg:flex gap-2'>
                    <Link to={'/select-plan'} className={`flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center font-medium text-sm lg:mr-2 ${location.pathname == '/select-plan' ? "bg-Pastel-blue" : ""} `}>2</Link>
                    <div className='hidden lg:flex lg:flex-col '>
                        <span className='text-Cool-gray font-normal text-xs'>STEP 2</span>
                        <h4 className='font-bold text-sm'>SELECT PLAN</h4>
                    </div>
                </li>
                <li className='lg:flex gap-2'>
                    <Link to={'/add-ons'} className={`flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center font-medium text-sm lg:mr-2 ${location.pathname == '/add-ons' ? "bg-Pastel-blue" : ""} `}>3</Link>
                    <div className='hidden lg:flex lg:flex-col '>
                        <span className='text-Cool-gray font-normal text-xs'>STEP 3</span>
                        <h4 className='font-bold text-sm'>ADD-ONS</h4>
                    </div>
                </li>
                <li className='lg:flex gap-2'> 
                    <Link to={'/summary'} className={`flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center font-medium text-sm lg:mr-2 ${location.pathname == '/summary' ? "bg-Pastel-blue" : ""} `}>4</Link>
                    <div className='hidden lg:flex lg:flex-col '>
                        <span className='text-Cool-gray font-normal text-xs'>STEP 4</span>
                        <h4 className='font-bold text-sm'>SUMMARY</h4>
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default Header;