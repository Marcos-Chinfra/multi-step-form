import React,{ useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const Information = () => {
    // const [completed, setCompleted] = useState(true);
    const form = useRef(null);
    const navigate = useNavigate();

    const sedinfo = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'phone': formData.get('phone')
        }
        const validation = Object.values(buyer).some( item => item === '')
        if(!validation){
            navigate('/add-ons')
        }
        console.log(validation)
    }


    return (
            <div className='flex flex-col p-4 gap-2 lg:max-w-md lg:mx-auto lg:px-0 lg:py-5'>
            <h1 className='text-2xl font-bold text-Marine-blue'>Personal Info</h1>
            <span className='text-Cool-gray font-normal'>Please provide your name, email, address, and phone number.</span>
            <form className='flex flex-col ' ref={form}>
                <label className='text-xs mt-4'  htmlFor="name">Name</label>
                <input className='border rounded p-2 font-medium text-sm lg:p-3' id="name" type="text" name="name" placeholder='e.g Bruce Wayne' />

                <label className='text-xs mt-4'  htmlFor="email">Email</label>
                <input className='border rounded p-2 font-medium text-sm lg:p-3' id="email" type="email" name="email" placeholder='e.g iambatman@email.com' />

                <label className='text-xs mt-4'  htmlFor="phone">Phone Number</label>
                <input className='border rounded p-2 font-medium text-sm lg:p-3' id="phone" type="number" name="phone" placeholder='e.g +502 1111 1111' />
                
            </form>
            {/* <footer className='m-64'>
                <button type='button' onClick={sedinfo}>Next step</button>
            </footer> */}
            </div>
    );
}

export default Information;