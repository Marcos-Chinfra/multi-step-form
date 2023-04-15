import React from 'react';

const Success = () => {
    return (
            <div className='flex flex-col items-center px-2 pt-16 lg:mb-9 gap-2 lg:w-125  lg:mx-auto lg:h-80' >
            <i  className='w-20 h-20 scale-75 bg-thankU'/>
            <h1 className='text-2xl font-bold'>
                Thank you! 
            </h1>
            <p className='text-Cool-gray font-normal text-center'>
                Thanks for confirming your subscription! We hope your have fun using our platform. If you ever need support, please feel free to email us at justiceleage@fckDC.com.
            </p>
            </div>
    );
}

export default Success;