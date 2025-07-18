export default function PopupInfo() {

const handleClosePopup = () => {
  const popup = document.querySelector('.background-popup');
  if (popup) {
    popup.classList.remove('show');
  }
};

    return (
            <div className='background-popup'>
        <div className='popup' >
          <div className='popup-header'>
            <h2>About FlexLayout</h2>
            <button className="close-button" onClick={handleClosePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249c12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0c12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z" /></svg>
            </button>
          </div>

          <p>
            <strong>FlexLayout</strong> is a simple and powerful tool that helps you explore and switch between
            different web layout structures using only HTML and CSS. Whether you're designing a UI or learning how layouts
            work, FlexLayout gives you ready-to-use layout templates that you can preview and copy instantly.
          </p>
          <p>
            No frameworks, no complex setup — just clean code and real layout patterns.
          </p>
          <p>
            Made with ❤️ by <a href="github.com/salajoui" target="_blank" rel="noopener noreferrer">Saljaoui</a>.
          </p>
        </div>
      </div>
    )
}