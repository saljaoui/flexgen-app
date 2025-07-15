import SidebarControls from './components/SidebarControls.jsx'
import Topbar from './components/Topbar.jsx'

function App() {
  return (
  <div className='app'>
    <Topbar />
    <div className="content-main">
      <SidebarControls />
      <div className="content">

      </div>
      
    </div>
  </div>
    
  );
}

export default App;