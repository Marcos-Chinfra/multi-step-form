import React from 'react';

const Information = () => {
    return (
        <div className='flex flex-col p-4 gap-2 lg:max-w-md lg:mx-auto lg:px-0 lg:py-5'>
            <h1 className='text-2xl font-bold'>Personal Info</h1>
            <span className='text-Cool-gray font-normal'>Please provide your name, email, address, and phone number.</span>
            <form className='flex flex-col '>
                <label className='text-xs mt-4' for="name">Name</label>
                <input className='border rounded p-2 font-medium text-sm lg:p-3' id="name" type="text" name="name" placeholder='e.g Bruce Wayne'/>
                <label className='text-xs mt-4' for="email">Email</label>
                <input className='border rounded p-2 font-medium text-sm lg:p-3' id="email" type="email" name="phone" placeholder='e.g iambatman@email.com'/>
                <label className='text-xs mt-4' for="phone">Phone Number</label>
                <input className='border rounded p-2 font-medium text-sm lg:p-3' id="phone" type="number" name="phone" placeholder='e.g +502 1111 1111'/>
            </form>
        </div>
    );
}

export default Information;