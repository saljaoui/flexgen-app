import { useEffect, useState } from 'react';

function CodeDisplay({ selectedLayout }) {
  const sidebarLayout = [
    {
      id: 'pancake',
      css: `
        .container {
          display: flex;
          gap: 2%;
          flex-direction: column;
          opacity: 1;
          transition: opacity 0.4s ease-in-out;
        }
        .container.fade-out {
          opacity: 0;
        }
        .item:nth-child(1),
        .item:nth-child(3) {
          width: 100%;
          height: 5%;
        }
        .item:nth-child(2) {
          height: 75%;
        }
      `,
      html: `
        <div class="item">Header</div>
        <div class="item">Content</div>
        <div class="item">Footer</div>
      `,
    },
    {
      id: 'sidebar',
      css: `
        .container {
          display: flex;
          gap: 2%;
          opacity: 1;
          transition: opacity 0.4s ease-in-out;
        }
        .container.fade-out {
          opacity: 0;
        }
        .item:nth-child(1) {
          width: 25%;
          height: 90%;
        }
        .item:nth-child(2) {
          height: 90%;
          width: 100%;
        }
      `,
      html: `
        <div class="item">Sidebar</div>
        <div class="item">Content</div>
      `,
    },
    {
      id: 'html5',
      css: `
        .container {
          display: flex;
          gap: 2%;
          flex-wrap: wrap;
          align-content: start;
          opacity: 1;
          transition: opacity 0.4s ease-in-out;
        }
        .container.fade-out {
          opacity: 0;
        }
        .item:nth-child(1),
        .item:nth-child(4) {
          width: 100%;
          height: 5%;
        }
        .item:nth-child(2) {
          width: 20%;
          height: 75%;
        }
        .item:nth-child(3) {
          flex-grow: 1;
          height: 75%;
        }
      `,
      html: `
        <div class="item">Header</div>
        <div class="item">Sidebar</div>
        <div class="item">Content</div>
        <div class="item">Footer</div>
      `,
    },
    {
      id: 'html5-2',
      css: `
        .container {
          display: flex;
          gap: 2%;
          flex-wrap: wrap;
          align-content: start;
          opacity: 1;
          transition: opacity 0.4s ease-in-out;
        }
        .container.fade-out {
          opacity: 0;
        }
        .item:nth-child(1),
        .item:nth-child(5) {
          width: 100%;
          height: 5%;
        }
        .item:nth-child(2),
        .item:nth-child(4) {
          width: 20%;
          height: 75%;
        }
        .item:nth-child(3) {
          flex-grow: 1;
          height: 75%;
        }
      `,
      html: `
        <div class="item">Header</div>
        <div class="item">Sidebar</div>
        <div class="item">Content</div>
        <div class="item">Sidebar</div>
        <div class="item">Footer</div>
      `
    },
  ];

  const [isFading, setIsFading] = useState(false);
  const [currentLayoutId, setCurrentLayoutId] = useState(selectedLayout);

  const currentLayout =
    sidebarLayout.find((layout) => layout.id === currentLayoutId) || sidebarLayout[0];

  useEffect(() => {
    if (selectedLayout !== currentLayoutId) {
      setIsFading(true);

      const timeout = setTimeout(() => {
        setCurrentLayoutId(selectedLayout);
        setIsFading(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [selectedLayout, currentLayoutId]);

  return (
    <div className="content">
      {/* Inject CSS for the current layout */}
      <style>{currentLayout.css}</style>

      {/* Apply fade-out class based on isFading */}
      <div
        className={`container ${isFading ? 'fade-out' : ''}`}
        dangerouslySetInnerHTML={{ __html: currentLayout.html }}
      />
    </div>
  );
}

export default CodeDisplay;
