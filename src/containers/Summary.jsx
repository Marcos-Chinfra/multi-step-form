import React from 'react';

const Summary = () => {
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
                    <h3 className='font-bold text-Marine-blue'>Arcade (Monthly)</h3>
                    <a className='text-Cool-gray underline font-medium'>Change</a>
                </div>
                <span className='font-bold text-Marine-blue'>$9/mo</span>
            </div>
            <div className='p-3 text-sm font-normal text-Cool-gray'>
                <span className='flex justify-between '>
                    Online service
                    <div className='text-Marine-blue font-medium'>+$1/mo</div>
                </span>
                <span className='flex justify-between mt-2'>
                    Larger storage
                    <div className='text-Marine-blue font-medium'>+$2/mo</div>
                </span>
            </div>
        </section>
        <div className='px-4 py-1 flex justify-between text-Cool-gray text-sm'>
            Total (per month)
            <div className='text-Purplish-blue font-bold text-base'>+$12/mo</div>
        </div>
        </div>
    );
}

export default Summary;