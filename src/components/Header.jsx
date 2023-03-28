import React from 'react';

const Header = () => {
    return (
        <header className='h-1/4 border rounded bg-black bg-mobile bg-center bg-no-repeat bg-cover'>
            <ul className='h-full w-1/2 mx-auto flex mt-8 justify-between text-white  '>
                <li>
                    <div className='flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center text-sm'>1</div>
                    <span className='hidden'>STEP 1</span>
                    <h4 className='hidden'>YOUR INFO</h4>
                </li>
                <li>
                    <div className='flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center text-sm'>2</div>
                    <span className='hidden'>STEP 2</span>
                    <h4 className='hidden'>YOUR INFO</h4>
                </li>
                <li>
                    <div className='flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center text-sm'>3</div>
                    <span className='hidden'>STEP 3</span>
                    <h4 className='hidden'>YOUR INFO</h4>
                </li>
                <li>
                    <div className='flex justify-center items-center p-2 w-8 h-8 border rounded-full text-center text-sm'>4</div>
                    <span className='hidden'>STEP 4</span>
                    <h4 className='hidden'>YOUR INFO</h4>
                </li>
            </ul>
        </header>
    );
}

export default Header;