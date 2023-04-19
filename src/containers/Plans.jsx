import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Plans = () => {
    // const [isOn, setIsOn] = useState(false);
    // const [arcade, setArcade] = useState(false);
    // const [ advanced, setAdvanced] = useState(false)
    // const [pro, setPro] = useState(false)
    const {isOn, setIsOn, arcade, setArcade,  advanced, setAdvanced, pro, setPro, setSelectedPlan, plans} = useContext(AppContext);

    const toggle = () => setIsOn(!isOn);
    const toggleArcade = () => {
        setArcade(true)
        setAdvanced(false)
        setPro(false)
        setSelectedPlan(plans.Arcade)
    }
    const toggleAdvanced = () => {
        setAdvanced(true)
        setArcade(false)
        setPro(false)
        setSelectedPlan(plans.Advanced)
    }
    const togglePro = () => {
        setPro(true)
        setAdvanced(false)
        setArcade(false)
        setSelectedPlan(plans.Pro)
    }
    

    return (
        <div className='flex flex-col p-4 gap-2 lg:w-125'>
            <h1 className='text-2xl font-bold text-Marine-blue'>Select your plan</h1>
            <span className='text-Cool-gray font-normal'>You have the option of monthly or yearly billing.</span>
            <ul className='flex flex-col gap-3 mt-2 lg:flex-row'>
                <li 
                    className={`border flex items-center justify-start rounded-md p-3 hover:plan-hover ${arcade ? 'bg-Alabaster border-Marine-blue' : ''} lg:flex-col lg:w-36 lg:items-start`}
                    onClick={toggleArcade}
                >
                    <i className='w-10 h-10 bg-arcade'/>
                    <div className='ml-6 lg:mt-11 lg:ml-0'>
                        <h3 className='text-md font-medium text-Marine-blue'>Arcade</h3>
                        <span className='text-sm text-Cool-gray font-normal flex flex-col gap-1'>
                            {isOn 
                            ?
                            <>
                                <span>$90/yr</span>
                                <span className='text-Marine-blue text-xs'>2 months free</span>
                            </>
                            : 
                            '$9/mo'}
                        </span>
                    </div>
                </li>
                <li 
                    className={`border flex items-center justify-start rounded-md p-3 hover:plan-hover ${advanced ? 'bg-Alabaster border-Marine-blue' : ''} lg:flex-col lg:w-36 lg:items-start`}
                    onClick={toggleAdvanced}
                >  
                    <i className='w-10 h-10 bg-advanced'/>
                    <div className='ml-6 lg:mt-11 lg:ml-0'>
                        <h3 className='text-md font-medium text-Marine-blue'>Advanced</h3>
                        <span className='text-sm text-Cool-gray font-normal flex flex-col gap-1'>
                        {isOn 
                        ? 
                        <>
                            <span>$120/yr</span>
                            <span className='text-Marine-blue text-xs'>2 months free</span>
                        </> 
                        : 
                        '$12/mo'}
                        
                        </span>
                    </div>
                </li>
                <li 
                    className={`border flex items-center justify-start rounded-md p-3 hover:plan-hover ${pro ? 'bg-Alabaster border-Marine-blue' : ''} lg:flex-col lg:w-36 lg:items-start`}
                    onClick={togglePro}
                >
                    <i className='w-10 h-10 bg-pro'/>
                    <div className='ml-6 lg:mt-11 lg:ml-0'>
                        <h3 className='text-md font-medium text-Marine-blue'>Pro</h3>
                        <span className='text-sm text-Cool-gray font-normal flex flex-col gap-1'>
                        {isOn 
                        ? 
                        <>
                            <span>$150/yr</span>
                            <span className='text-Marine-blue text-xs'>2 months free</span>
                        </>  
                        : 
                        '$15/mo'}
                        </span>
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
            <div className='w-full h-20 p-4 bg-white flex justify-between items-center fixed right-0 left-0 bottom-0 lg:static lg:mt-10'>
                <Link to={'/'} className='text-Cool-gray cursor-pointer hover:back'>Go Back</Link>
                <Link to={'/add-ons'} className=' bg-Marine-blue p-2 w-24 h-10 text-white rounded flex justify-center items-center hover:next-bg' >Next Step</Link>
            </div>
        </div>
    );
}

export default Plans;