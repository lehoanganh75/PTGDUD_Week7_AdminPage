import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ className }) => {
  return (
    <div className={`menu bg-white p-4 shadow-lg h-full ${className}`}>
      <div>
        <img src="./image/logo.png" alt="Logo" className="w-full"/>
      </div>
      <ul className='mt-4'>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            `flex items-center p-2 rounded-lg ${isActive ? 'bg-pink-400 text-white font-medium' : 'hover:bg-pink-300 text-gray-700'}`
          }
        >
          <img src="./image/Folder.png" alt="Dashboard" className='mr-2'/>
          <span className="w-full">Dashboard</span>
        </NavLink>

        <NavLink 
          to="/projects"
          className={({ isActive }) => 
            `flex items-center p-2 rounded-lg ${isActive ? 'bg-pink-400 text-white font-medium' : 'hover:bg-pink-300 text-gray-700'}`
          }
        >
          <img src="./image/Folder.png" alt="Projects" className='mr-2'/>
          <span className="w-full">Projects</span>
        </NavLink>

        <NavLink 
          to="/teams"
          className={({ isActive }) => 
            `flex items-center p-2 rounded-lg ${isActive ? 'bg-pink-400 text-white font-medium' : 'hover:bg-pink-300 text-gray-700'}`
          }
        >
          <img src="./image/Folder.png" alt="Teams" className='mr-2'/>
          <span className="w-full">Teams</span>
        </NavLink>

        <NavLink 
          to="/analytics"
          className={({ isActive }) => 
            `flex items-center p-2 rounded-lg ${isActive ? 'bg-pink-400 text-white font-medium' : 'hover:bg-pink-300 text-gray-700'}`
          }
        >
          <img src="./image/Folder.png" alt="Analytics" className='mr-2'/>
          <span className="w-full">Analytics</span>
        </NavLink>

        <NavLink 
          to="/messages"
          className={({ isActive }) => 
            `flex items-center p-2 rounded-lg ${isActive ? 'bg-pink-400 text-white font-medium' : 'hover:bg-pink-300 text-gray-700'}`
          }
        >
          <img src="./image/Folder.png" alt="Messages" className='mr-2'/>
          <span className="w-full">Messages</span>
        </NavLink>

        <NavLink 
          to="/integrations"
          className={({ isActive }) => 
            `flex items-center p-2 rounded-lg ${isActive ? 'bg-pink-400 text-white font-medium' : 'hover:bg-pink-300 text-gray-700'}`
          }
        >
          <img src="./image/Folder.png" alt="Integrations" className='mr-2'/>
          <span className="w-full">Integrations</span>
        </NavLink>
      </ul>

      <div className='justify-center text-center bg-blue-50 rounded-lg p-4 mt-6'>
        <img src="./image/Group.png" className="p-1 mt-[30px]" alt="Promo" />
        <button className='text-blue border w-[210px] h-[40px] rounded-lg hover:scale-105 hover:text-blue-600 text-blue-600 mt-2'>
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;