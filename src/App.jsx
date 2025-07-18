import { useState, useEffect } from 'react';
import SidebarControls from './components/SidebarControls.jsx';
import Topbar from './components/Topbar.jsx';
import SidebarContentList from './components/SidebarContentList.jsx';
import CodeDisplay from './components/CodeDisplay.jsx';
import PopupInfo from './components/PopupInfo.jsx';

function App() {
  const [selectedLayout, setSelectedLayout] = useState(() => {
    return localStorage.getItem('selectedLayout') || 'pancake';
  });

  const handleLayoutChange = (layoutId) => {
    setSelectedLayout(layoutId);
    localStorage.setItem('selectedLayout', layoutId);
  };




  return (
    <div className='app'>
      <Topbar />
      <div className="content-main">
        <SidebarControls />
        <SidebarContentList
          selectedLayout={selectedLayout}
          onLayoutChange={handleLayoutChange}
        />
        <CodeDisplay selectedLayout={selectedLayout} />
      </div>
      <PopupInfo />
    </div>
  );
}

export default App;
