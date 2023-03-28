import React, { useState } from 'react';

const Plans = () => {
    
    const [isOn, setIsOn] = useState(false);
    const toggle = () => setIsOn(!isOn);

    return (
        <div className='flex flex-col p-4 gap-2'>
            <h1 className='text-2xl font-bold text-Marine-blue'>Select your plan</h1>
            <span className='text-Cool-gray font-normal'>You have the option of monthy or yearly biling.</span>
            <ul className='flex flex-col gap-3 mt-2'>
                <li className='border flex items-center justify-start rounded-md p-3 hover:plan-hover'>
                    <i className='w-10 h-10 bg-arcade'/>
                    <div className='ml-6'>
                        <h3 className='text-md font-medium text-Marine-blue'>Arcade</h3>
                        <span className='text-sm text-Cool-gray font-normal'>$9/mo</span>
                    </div>
                </li>
                <li className='border flex items-center justify-start rounded-md p-3 hover:plan-hover'>  
                    <i className='w-10 h-10 bg-advanced'/>
                    <div className='ml-6'>
                        <h3 className='text-md font-medium text-Marine-blue'>Advanced</h3>
                        <span className='text-sm text-Cool-gray font-normal'>$12/mo</span>
                    </div>
                </li>
                <li className='border flex items-center justify-start rounded-md p-3 hover:plan-hover'>
                    <i className='w-10 h-10 bg-pro'/>
                    <div className='ml-6'>
                        <h3 className='text-md font-medium text-Marine-blue'>Pro</h3>
                        <span className='text-sm text-Cool-gray font-normal'>$15/mo</span>
                    </div>
                </li>
            </ul>
            <div className='mt-2 p-3 flex flex-row bg-Alabaster  rounded justify-evenly  items-center'>
                <span className={`font-medium text-sm ${isOn ? "text-Cool-gray " : "text-Marine-blue" }`}>
                    Monthly
                </span>
                <div 
                    className='bg-Marine-blue w-10 h-5 rounded-full px-1.5 flex items-center'
                    onClick={toggle}
                >
                    <div className={`w-3 h-3 rounded-full switch bg-white shadow-md transform ${isOn ? "translate-x-4" : "translate-x-0" }`} />
                </div>
                <span className={`font-medium text-sm ${isOn ? "text-Marine-blue" : "text-Cool-gray" }`}>
                    Yearly
                </span>
            </div>
        </div>
    );
}

export default Plans;