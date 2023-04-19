import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Summary = () => {
    const { isOn, arcade, advanced, pro, plans, state,state2,state3, addOns, selectedAddOns } = useContext(AppContext);
    console.log(selectedAddOns)
    console.log(state)

    return (
        <div className='flex flex-col p-4 gap-2 lg:w-125 lg:mx-auto lg:p-5' >
        <h1 className='text-2xl font-bold text-Marine-blue'>
            Finishing up 
        </h1>
        <span className='text-Cool-gray font-normal'>
            Double-check everything look OK before confirming.
        </span>
        <section className='my-3 p-2 rounded bg-Magnolia  '>
            <div className='flex justify-between  items-center border-b text-sm p-3'>
                <div >
                    <h3 className='font-bold text-Marine-blue tracking-wider'>
                        {arcade && plans.Arcade.title}
                        {advanced && plans.Advanced.title}
                        {pro && plans.Pro.title} 
                        ({isOn ? 'Yearly' : 'Monthly'})
                    </h3>
                    <Link to={'/select-plan'} className='text-Cool-gray underline font-medium'>Change</Link>
                </div>
                <span className='font-bold text-Marine-blue'>
                {arcade && (isOn ? `$${plans.Arcade.year}/yr` : `$${plans.Arcade.month}/mo`)}
                {advanced && (isOn ? `$${plans.Advanced.year}/yr` : `$${plans.Advanced.month}/mo`)}
                {pro && (isOn ? `$${plans.Pro.year}/yr` : `$${plans.Pro.month}/mo`)}
                </span>
            </div>
            <div className='p-3 text-sm font-normal text-Cool-gray'>
                {state && 
                <span className='flex justify-between '>
                    {addOns.one.title}
                    <div className='text-Marine-blue font-medium'>
                    {isOn ? `+$${addOns.one.year}/yr` : `+$${addOns.one.month}/mo` }
                    </div>
                </span>}

                {state2 && 
                <span className='flex justify-between mt-2'>
                    {addOns.two.title}
                    <div className='text-Marine-blue font-medium'>
                        {isOn ? `+$${addOns.two.year}/yr` : `+$${addOns.two.month}/mo` }
                    </div>
                </span>}

                {state3 && 
                <span className='flex justify-between mt-2'>
                    {addOns.three.title}
                    <div className='text-Marine-blue font-medium'>
                        {isOn ? `+$${addOns.three.year}/yr` : `+$${addOns.three.month}/mo` }
                    </div>
                </span>}
            </div>
        </section>
        <div className='px-4 py-1 flex justify-between text-Cool-gray text-sm'>
            Total ({isOn ? 'per yearly' : 'per monthly'})
            <div className='text-Purplish-blue font-bold text-base'>k</div>
        </div>
        <div className='w-full h-20 p-4 bg-white flex justify-between items-center fixed right-0 left-0 bottom-0 lg:static lg:mt-10'>
                <Link to={'/add-ons'} className='text-Cool-gray cursor-pointer hover:back'>Go Back</Link>
                <Link to={'/success'} className=' bg-Purplish-blue p-2 w-24 h-10 text-white rounded flex justify-center items-center hover:hover-confirm' >Confirm</Link>
            </div>
        </div>
    );
}

export default Summary;