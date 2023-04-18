import React,{ useRef, useState } from 'react';
import  { useNavigate }  from 'react-router-dom';


const Information = () => {
    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorNumber, setErrorNumber] = useState(false)
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'phone': formData.get('phone')
        }
        const validation = Object.values(buyer).some( item => item === '')
        if(!validation){
            navigate('/select-plan')
        }
        if(buyer.name === ''){
            setErrorName(true)
        }
        else
        {
            setErrorName(false)
        }

        if(buyer.email === ''){
            setErrorEmail(true)
        }
        else 
        {
            setErrorEmail(false)
        }

        if(buyer.phone === ''){
            setErrorNumber(true)
        }
        else 
        {
            setErrorNumber(false)
        }
        console.log(buyer.name)
    }
    


    return (
            <div className='flex flex-col p-4 gap-2 lg:max-w-md lg:mx-auto lg:px-0 lg:py-5'>
            <h1 className='text-2xl font-bold text-Marine-blue'>Personal Info</h1>
            <span className='text-Cool-gray font-normal'>Please provide your name, email, address, and phone number.</span>
            <form className='flex flex-col ' ref={form} onSubmit={handleSubmit}>
                <label className='py-2 text-xs mt-4 flex justify-between'  htmlFor="name">
                    Name
                    {errorName ? <p className='text-Strawberry-red font-medium'>This field is required</p> : ''}
                </label>
                
                <input className={`border rounded p-2 font-medium text-sm  lg:p-3 ${errorName ? 'outline-Strawberry-red' : 'outline-Purplish-blue'} `} id="name" type="text" name="name" placeholder='e.g Bruce Wayne'  />
                

                <label className='py-2 text-xs mt-4 flex justify-between'  htmlFor="email">
                    Email
                    {errorEmail ? <p className='text-Strawberry-red font-medium'>This field is required</p> : ''}    
                </label>
                <input className={`border rounded p-2 font-medium text-sm lg:p-3 outline-Purplish-blue ${errorEmail ? 'outline-Strawberry-red' : ''} `} id="email" type="email" name="email" placeholder='e.g iambatman@email.com' />
                

                <label className='py-2 text-xs mt-4 flex justify-between'  htmlFor="phone">
                    Phone Number
                    {errorNumber ? <p className='text-Strawberry-red font-medium'>This field is required</p> : ''}
                </label>
                <input className={`border rounded p-2 font-medium text-sm lg:p-3 outline-Purplish-blue ${errorNumber ? 'outline-Strawberry-red' : ''}`} id="phone" type="number" name="phone" placeholder='e.g +502 1111 1111' />
                
                
                <div className='w-full h-20 p-4 bg-white flex justify-end items-center fixed right-0 left-0 bottom-0 lg:static'>
                    <button 
                        className=' bg-Marine-blue p-2 w-24 h-10 text-white rounded' 
                        type='submit'
                        >Next Step</button>
                </div>
            </form>
            </div>
    );
}

export default Information;