import React from 'react';

const DisplayGrid = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="22"
    viewBox="0 0 21 22"
    fill="none"
    className={className}
  >
    <g>
      <g>
        <rect x="0.5" y="0.5" width="9" height="9" />
      </g>
      <g>
        <rect x="0.5" y="13.5" width="9" height="9" />
      </g>
      <g>
        <rect x="12.5" y="0.5" width="9" height="9" />
      </g>
      <g>
        <rect x="12.5" y="13.5" width="9" height="9" />
      </g>
    </g>
  </svg>
);

export default DisplayGrid;
