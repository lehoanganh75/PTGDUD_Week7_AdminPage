import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './index.css'
import OverView from './components/OverView'

function App() {

  return (
    <div>
      <div className="container h-100vh grid gap-1 p-2 m-1 ml-6">
        <div className="header flex justify-between">
          <h2 className='font-bold text-pink-400 text-3xl'>DashBoard</h2>
          <div className='flex gap-2'>
            <img src="./image/Search.png" className='h-[20px] mr-2 mt-2 absolute' alt="" />
            <input type="text" placeholder='Search...' className='bg-gray-50 px-8 w-[200px] m-1 rounded-lg'/>
            <button className='hover:cursor-pointer'>
              <img src="./image/Bell 1.png" alt="" />
            </button>
            <button className='hover:cursor-pointer'>
              <img src="./image/Question 1.png" alt="" />
            </button>
            <button className='hover:cursor-pointer'>
              <img src="./image/Avatar (1).png" alt="" />
            </button>
          </div>
        </div>
        <div className="menu">
          <div>
            <img src="./image/logo.png" alt="" />
          </div>
          <div>
          <ul>
            <li className='flex hover:bg-pink-300 rounded-lg'>
              <img src="./image/Folder.png" alt="" className='mr-2'/>
              <a href="#">Dashboard</a>
              </li>
            <li className='flex hover:bg-pink-300 rounded-lg'>
            <img src="./image/Folder.png" alt="" className='mr-2'/>
              <a href="#">Projects</a>
              </li>
            <li className='flex hover:bg-pink-300 rounded-lg'><img src="./image/Folder.png" alt="" className='mr-2'/><a href="#">Teams</a></li>
            <li className='flex hover:bg-pink-300 rounded-lg'><img src="./image/Folder.png" alt="" className='mr-2' /><a href="#">Analytics</a></li>
            <li className='flex hover:bg-pink-300 rounded-lg' ><img src="./image/Folder.png" alt="" className='mr-2'/><a href="#">Messages</a></li>
            <li className='flex hover:bg-pink-300 rounded-lg'><img src="./image/Folder.png" alt="" className='mr-2'/><a href="#">Integrations</a></li>
          
          </ul>
          </div>
          <div className='justify-center text-center bg-blue-50 rounded-lg p-2'>
            <img src="./image/Group.png" className="p-1 mt-[30px]" alt="" />
            <button type='button' className='text-blue border w-[210px] h-[40px] rounded-lg hover:scale-105 hover:text-blue-600 text-blue-600'>Try now</button>
          </div>
        </div>
        <div className="content">
          <div className='flex p-4'>
            <img src="./image/Folder.png" className=' mr-2' alt="" />
            <h2 className='font-bold'>
              OverView
            </h2>
            <OverView />
          </div>
          <div>

          </div>
        </div>
        <div className="footer"><h4>Footer</h4></div>
      </div>
    </div>
  )
}

export default App
