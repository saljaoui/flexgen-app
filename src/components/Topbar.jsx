import React from 'react';

function Topbar({ layoutMode, onToggleMode, onCopy, onDownload }) {
  return (
    <header className="top-bar">
      <h1 className="logo">FlexGen</h1>

      <div className="mode-switch">
        <span>Mode:</span>
        <button
          className={layoutMode === 'flex' ? 'active' : ''}
          onClick={() => onToggleMode('flex')}
        >
          Flex
        </button>
        <button
          className={layoutMode === 'grid' ? 'active' : ''}
          onClick={() => onToggleMode('grid')}
        >
          Grid
        </button>
      </div>

      <div className="action-buttons">
        <button onClick={onCopy}>Copy</button>
        <button onClick={onDownload}>Download</button>
      </div>
    </header>
  );
}

export default Topbar;
