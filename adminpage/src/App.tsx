import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './index.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Integrations from './pages/Integrations';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <div className="container h-screen grid grid-rows-[60px_1fr] grid-cols-[250px_1fr] gap-2 bg-gray-100 p-4">
        <Header className="col-span-2" />
        <Sidebar className="row-span-2" />
        <Routes>
          <Route path="/" element={<Content className="overflow-auto" />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;