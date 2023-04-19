import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Complements = () => {
    const { isOn, state,state2,state3, setState, setState2, setState3, setSelectedAddOns} = useContext(AppContext);
    console.log(state)

    const handleSum = () => {
        if(state){
            setSelectedAddOns('Holaaa')
        }
    }


    return (
        <div className='flex flex-col p-4 gap-2' >
            <h1 className='text-2xl font-bold text-Marine-blue'>
                Pick add-ons
            </h1>
            <span className='text-Cool-gray font-normal'>
                Add-ons help enhance your gaming experience.
            </span>
            <ul className='flex flex-col gap-2 '>

                <li className={`border py-3 px-4 rounded-md hover:hover-checked ${state ? "bg-checked": 'bg-white'}`}>
                    <label className="flex justify-between items-center relative lg:justify-start lg:gap-5">
                        <input className='check-input' onClick={(e) =>{setState(e.target.checked)}} type="checkbox"/>
                        <i className="fa-solid fa-check checkbox display-none"></i>
                        <div className='leading-none w-40 lg:w-96'>
                            <h3 className='text-sm text-Marine-blue font-bold lg:text-lg'>
                                Online service
                            </h3>
                            <span className='text-xs text-Cool-gray font-medium lg:text-sm'>Access to multiplayer games</span>
                        </div>
                        <span className='text-xs text-Purplish-blue font-medium lg:ml-8'>{isOn ? '+$10/yr': '+$1/mo'}</span>
                    </label>
                </li>

                <li className={`border py-3 px-4 rounded-md hover:hover-checked ${state2 ? "bg-checked": 'bg-white'}`}>
                    <label className="flex justify-between items-center relative lg:justify-start lg:gap-5">
                        <input className='check-input' onClick={(e) =>{setState2(e.target.checked)}} type="checkbox"/>
                        <i className="fa-solid fa-check checkbox display-none"></i>
                        <div className='leading-none w-40 lg:w-96'>
                            <h3 className='text-sm text-Marine-blue font-bold lg:text-lg'>
                                Large storage
                            </h3>
                            <span className='text-xs text-Cool-gray font-medium lg:text-sm'>Extra 1TB of cloud save</span>
                        </div>
                        <span className='text-xs text-Purplish-blue font-medium lg:ml-8'>{isOn ? '+$20/yr': '+$2/mo'}</span>
                    </label>
                </li>

                <li className={`border py-3 px-4 rounded-md hover:hover-checked ${state3 ? "bg-checked": 'bg-white'}`}>
                    <label className="flex justify-between items-center lg:justify-start lg:gap-5">
                        <input className='check-input' onClick={(e) => {setState3(e.target.checked)}}  type="checkbox"/>
                        <i className="fa-solid fa-check checkbox display-none"></i>
                        <div className='leading-none w-6/8 lg:w-96'>
                            <h3 className='text-sm text-Marine-blue font-bold lg:text-lg'>
                                Customizable profile
                            </h3>
                            <span className='text-xs text-Cool-gray font-medium lg:text-sm'>Custom theme on your profile</span>
                        </div>
                        <span className='text-xs text-Purplish-blue font-medium lg:ml-8'>{isOn ? '+$20/yr': '+$2/mo'}</span>
                    </label>
                </li>
            </ul>
            <div className='w-full h-20 p-4 bg-white flex justify-between items-center fixed right-0 left-0 bottom-0 lg:static lg:mt-10'>
                <Link to={'/select-plan'} onClick={handleSum} className='text-Cool-gray cursor-pointer hover:back'>Go Back</Link>
                <Link to={'/summary'} className=' bg-Marine-blue p-2 w-24 h-10 text-white rounded flex justify-center items-center hover:next-bg' >Next Step</Link>
            </div>
        </div>
    );
}

export default Complements;