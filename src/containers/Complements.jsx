import React, { useState } from 'react';

const Complements = () => {
    const[ state, setState] = useState(null)
    const[ state2, setState2] = useState(null)
    const[ state3, setState3] = useState(null)

    return (
        <div className='flex flex-col p-4 gap-2' >
            <h1 className='text-2xl font-bold'>
                Pick add-ons
            </h1>
            <span className='text-Cool-gray font-normal'>
                Add-ons help enhance your haming experience.
            </span>
            <ul className='flex flex-col gap-2 '>
                <li className={`border py-3 px-4 rounded-md ${state ? "bg-checked": 'bg-white'}`}>
                    <label className="flex justify-between items-center relative lg:justify-start lg:gap-5">
                        <input className='check-input' onClick={(e) => {setState(e.target.checked)}} type="checkbox"/>
                        <i className="fa-solid fa-check checkbox display-none"></i>
                        <div className='leading-none w-40 lg:w-96'>
                            <h3 className='text-sm text-Marine-blue font-bold lg:text-lg'>
                                Online service
                            </h3>
                            <span className='text-xs text-Cool-gray font-medium lg:text-sm'>Acces to multiplayer games</span>
                        </div>
                        <span className='text-xs text-Purplish-blue font-medium lg:ml-8'>+$1/mo</span>
                    </label>
                </li>

                <li className={`border py-3 px-4 rounded-md ${state2 ? "bg-checked": 'bg-white'}`}>
                    <label className="flex justify-between items-center relative lg:justify-start lg:gap-5">
                        <input className='check-input' onClick={(e) => {setState2(e.target.checked)}} type="checkbox"/>
                        <i className="fa-solid fa-check checkbox display-none"></i>
                        <div className='leading-none w-40 lg:w-96'>
                            <h3 className='text-sm text-Marine-blue font-bold lg:text-lg'>
                                Large storage
                            </h3>
                            <span className='text-xs text-Cool-gray font-medium lg:text-sm'>Extra 1TB of cloud save</span>
                        </div>
                        <span className='text-xs text-Purplish-blue font-medium lg:ml-8'>+$2/mo</span>
                    </label>
                </li>

                <li className={`border py-3 px-4 rounded-md ${state3 ? "bg-checked": 'bg-white'}`}>
                    <label className="flex justify-between items-center lg:justify-start lg:gap-5">
                        <input className='check-input' onClick={(e) => {setState3(e.target.checked)}}  type="checkbox"/>
                        <i className="fa-solid fa-check checkbox display-none"></i>
                        <div className='leading-none w-6/8 lg:w-96'>
                            <h3 className='text-sm text-Marine-blue font-bold lg:text-lg'>
                                Customizable profile
                            </h3>
                            <span className='text-xs text-Cool-gray font-medium lg:text-sm'>Custom theme on your profile</span>
                        </div>
                        <span className='text-xs text-Purplish-blue font-medium lg:ml-8'>+$2/mo</span>
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default Complements;