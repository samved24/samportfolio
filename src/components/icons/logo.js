import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8, -2)">
      <g transform="translate(11, 5)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        <text
          x="39"   // Centered horizontally
          y="50"   // Keeping y=50 as preferred
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
    </g>
  </svg>
);

export default IconLogo;
