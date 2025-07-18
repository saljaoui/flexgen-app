import { useState } from 'react';
import { layouts } from "../data/layouts";

export default function PopupCode({ selectedLayout }) {
    const [activeTab, setActiveTab] = useState('html');

    const handleClosePopup = () => {
        const popup = document.querySelector('.background-popup-code');
        if (popup) {
            popup.classList.remove('show');
        }
    };

    const handleCopyCode = () => {
        const code = activeTab === 'html' ? currentLayout.html : currentLayout.css;
        navigator.clipboard.writeText(code);
        // You can add a toast notification here if you want
    };

    const currentLayout = layouts.find(layout => layout.id === selectedLayout) || layouts[0];

    return (
        <div className='background-popup-code'>
            <div className='popup'>
                <div className='popup-header'>
                    <h2>Code: {currentLayout.id}</h2>
                    <button className="close-button" onClick={handleClosePopup}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                            <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249c12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0c12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z" />
                        </svg>
                    </button>
                </div>

                <div className='popup-content'>
                    <div className='tab-navigation'>
                        <button
                            className={`tab-button ${activeTab === 'html' ? 'active' : ''}`}
                            onClick={() => setActiveTab('html')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60" /><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38H48Z" /><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128V38Zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014v-33.227Z" /></g></svg>
                            HTML
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'css' ? 'active' : ''}`}
                            onClick={() => setActiveTab('css')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277BD" rx="60" /><path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942H53.753ZM128.095 38H48l2.904 31.942h77.191V38Zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164l.147-.041Z" /><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942h39.333Z" /></g></svg>
                            CSS
                        </button>
                    </div>

                    <div className='code-container'>
                        <pre className='code-block'>
                            <button className='copy-button' onClick={handleCopyCode}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path fill="currentColor" d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z" /></svg>
                            </button>
                            <code className={activeTab === 'html' ? 'language-html' : 'language-css'}>
                                {activeTab === 'html' ? currentLayout.html : currentLayout.css}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}