import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './index.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container h-screen grid grid-rows-[60px_1fr] grid-cols-[250px_1fr] gap-2 bg-gray-100 p-4">
      <Header className="col-span-2" />
      <Sidebar className="row-span-2" />
      <Content className="overflow-auto" />
    </div>
  );
}

export default App;