import React from 'react';

const Header = ({ className }) => {
    return (
      <div className={`header flex justify-between bg-white p-4 shadow-md ${className}`}>
        <h2 className='font-bold text-pink-400 text-3xl'>DashBoard</h2>
        <div className='flex gap-2'>
          <img src="./image/Search.png" className='h-[20px] mr-2 mt-2 absolute' alt="Search" />
          <input type="text" placeholder='Search...' className='bg-gray-50 px-8 w-[200px] m-1 rounded-lg'/>
          <button className='hover:cursor-pointer'><img src="./image/Bell 1.png" alt="Notifications" /></button>
          <button className='hover:cursor-pointer'><img src="./image/Question 1.png" alt="Help" /></button>
          <button className='hover:cursor-pointer'><img src="./image/Avatar (1).png" alt="Profile" /></button>
        </div>
      </div>
    );
  };  

export default Header;