import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="S" transform="translate(26, 35)"> {/* Adjusted translation for centering */}
        <text
          x="25"   // Centered horizontally
          y="20"  // Positioned vertically at 50
          fontSize="48"
          fontFamily="Arial"
          fontWeight="bold" // Set to bold
          fill="currentColor"
          textAnchor="middle" // Centers text horizontally
          dominantBaseline="middle" // Centers text vertically
        >
          S
        </text>
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
