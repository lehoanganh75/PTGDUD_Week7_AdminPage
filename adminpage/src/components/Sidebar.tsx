import React from 'react';

const Sidebar = ({ className }) => {
  return (
    <div className={`menu bg-white p-4 shadow-lg h-full ${className}`}>
      <div>
        <img src="./image/logo.png" alt="Logo" className='w-full'/>
      </div>
      <ul className='mt-4'>
        {['Dashboard', 'Projects', 'Teams', 'Analytics', 'Messages', 'Integrations'].map((item, index) => (
          <li key={index} className='flex items-center p-2 hover:bg-pink-300 rounded-lg'>
            <img src="./image/Folder.png" alt={item} className='mr-2'/>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className='justify-center text-center bg-blue-50 rounded-lg p-4 mt-6'>
        <img src="./image/Group.png" className="p-1 mt-[30px]" alt="Promo" />
        <button className='text-blue border w-[210px] h-[40px] rounded-lg hover:scale-105 hover:text-blue-600 text-blue-600 mt-2'>Try now</button>
      </div>
    </div>
  );
};

export default Sidebar;