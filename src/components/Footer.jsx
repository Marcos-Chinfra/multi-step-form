import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {
    const location = useLocation();
    let content;

    switch (location.pathname){
        case '/':
            content = (
                <div className=' bg-Marine-blue p-2 w-24 h-10 text-white rounded flex justify-center items-center'>
                    <Link to={'/select-plan'}>Next Step</Link>
                </div>
            )
            break;
        case '/select-plan':
            content = (
                <div className='w-full h-full flex justify-between items-center'>
                    <Link to={'/'} className='text-Cool-gray cursor-pointer'>Go Back</Link>
                    <Link to={'/add-ons'} className=' bg-Marine-blue -2 w-24 h-10 text-white rounded flex justify-center items-center' >Next Step</Link>
                </div>
            )
            break;
        case '/add-ons':
            content = (
                <div className='w-full h-full flex justify-between items-center'>
                    <Link to={'/select-plan'} className='text-Cool-gray cursor-pointer'>Go Back</Link>
                    <Link to={'/summary'}  className=' bg-Marine-blue -2 w-24 h-10 text-white rounded flex justify-center items-center'> Next step</Link>
                </div>
            )
            break;
        case '/summary':
            content = (
                <div className='w-full h-full flex justify-between items-center'>
                    <Link to={'/add-ons'}  className='text-Cool-gray cursor-pointer'>Go Back</Link>
                    <Link to={'/success'}  className=' bg-Purplish-blue -2 w-24 h-10 text-white rounded flex justify-center items-center'>Confirm</Link>
                </div>
            )
            break;
        case '/success':
            content = (
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
            )
            break;
            
    }


    return (
        <footer className='w-full h-20 p-4 bg-white absolute bottom-0 flex justify-end items-center lg:static'>
            {content}
        </footer>
    );
}

export default Footer;


// const CustomButton = ({ to, text }) => {
//   return (
//     <Link to={to}>
//       <button className="button">{text}</button>
//     </Link>
//   );
// };

// export default CustomButton;