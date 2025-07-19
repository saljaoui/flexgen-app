
function SidebarControls() {

  const handleButtonInfo = () => {
    const popup = document.querySelector('.background-popup');
    if (popup) {
      popup.classList.add('show');
    }
  };

const handleButtonCloseSide = () => {
  const button = document.querySelector('.sidebar-controls-headr .close-sidebar-btn');
  const sidebar = document.querySelector('.sidebar-content');
  sidebar.classList.toggle('show');
  button.classList.toggle('active');
};

  const handleButtonShowCode = () => {
    const popup = document.querySelector('.background-popup-code');
    if (popup) {
      popup.classList.add('show');
    }
  }

  return (
    <div className="sidebar-controls" >
      <div className="sidebar-controls-headr" >
<button className="close-sidebar-btn active" onClick={handleButtonCloseSide}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path d="M12.675 12L10.3 14.375q-.275.275-.275.688t.275.712q.3.3.713.3t.712-.3L14.8 12.7q.3-.3.3-.7t-.3-.7l-3.1-3.1q-.3-.3-.7-.287t-.7.312q-.275.3-.288.7t.288.7L12.675 12ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" />
  </svg>
</button>

        <button onClick={handleButtonShowCode} >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fillRule="evenodd" clipRule="evenodd"><path d="M1.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412Z" /><path d="M6.41 6.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074Zm12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074Z" /><path d="M13.59 6.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412Zm-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702Z" /></g></svg>
        </button>
      </div>

      <div className="sidebar-controls-footer">
        <button onClick={handleButtonInfo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 5v.01" /><path d="M12 13.5a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4" /></g></svg>
        </button>
      </div>

    </div>

  );
}

export default SidebarControls;