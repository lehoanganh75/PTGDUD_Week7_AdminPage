import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ className }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Projects', path: '/projects' },
    { name: 'Teams', path: '/teams' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Messages', path: '/messages' },
    { name: 'Integrations', path: '/integrations' }
  ];

  return (
    <div className={`menu bg-white p-4 shadow-lg h-full ${className}`}>
      <div>
        <img src="./image/logo.png" alt="Logo" className='w-full'/>
      </div>
      <ul className='mt-4'>
        {menuItems.map((item, index) => (
          <li key={index} className='flex items-center p-2 hover:bg-pink-300 rounded-lg'>
            <img src="./image/Folder.png" alt={item.name} className='mr-2'/>
            <Link to={item.path} className="w-full">{item.name}</Link>
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