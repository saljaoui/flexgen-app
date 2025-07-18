import { useEffect, useState } from 'react';
import { layouts } from '../data/layouts';

function CodeDisplay({ selectedLayout }) {


  const [isFading, setIsFading] = useState(false);
  const [currentLayoutId, setCurrentLayoutId] = useState(selectedLayout);

  const currentLayout =
    layouts.find((layout) => layout.id === currentLayoutId) || layouts[0];

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
