import SidebarControls from './components/SidebarControls.jsx'
import Topbar from './components/Topbar.jsx'
import SidebarContentList from './components/SidebarContentList.jsx'

function App() {
  return (
  <div className='app'>
    <Topbar />
    <div className="content-main">
      <SidebarControls />
      <SidebarContentList />
      <div className="content">

      </div>
      
    </div>
  </div>
    
  );
}

export default App;