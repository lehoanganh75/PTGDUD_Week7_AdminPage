import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './index.css'

function App() {

  return (
    <div>
      <div className="container h-100vh grid gap-1 p-2 m-1 ml-6">
        <div className="header">
          <h2>My Header</h2>
        </div>
        <div className="menu">
          <div>
            <img src="./image/logo.png" alt="" />
          </div>
          <div>
          <ul>
            <li className='flex'>
              <img src="./image/Folder.png" alt="" className='mr-2'/>
              <a href="#">Dashboard</a>
              </li>
            <li className='flex'>
            <img src="./image/Folder.png" alt="" className='mr-2'/>
              <a href="#">Projects</a>
              </li>
            <li className='flex'><img src="./image/Folder.png" alt="" className='mr-2'/><a href="#">Teams</a></li>
            <li className='flex'><img src="./image/Folder.png" alt="" className='mr-2' /><a href="#">Analytics</a></li>
            <li className='flex' ><img src="./image/Folder.png" alt="" className='mr-2'/><a href="#">Messages</a></li>
            <li className='flex'><img src="./image/Folder.png" alt="" className='mr-2'/><a href="#">Integrations</a></li>
          </ul>
          </div>
        </div>
        <div className="content"><h3>Lorem Ipsum</h3><p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.</p></div>
        <div className="footer"><h4>Footer</h4></div>
      </div>
    </div>
  )
}

export default App
