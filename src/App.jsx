import React from 'react';
import Topbar from './components/Topbar';
import SidebarControls from './components/SidebarControls';
import LayoutPreview from './components/LayoutPreview';
import GeneratedCode from './components/GeneratedCode';
import './styles/main.css';

function App() {
  return (
    <div className="app-container">
      <Topbar />
      <div className="main-content">
        <SidebarControls />
        <LayoutPreview />
        <GeneratedCode />
      </div>
    </div>
  );
}

export default App;
