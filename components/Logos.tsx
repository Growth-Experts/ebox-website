import React from 'react';

export const EBoxLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg viewBox="0 0 160 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#BCD727" />
    <text x="30" y="42" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="44" fill="white" textAnchor="middle">e</text>
    <text x="66" y="42" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="44" fill="#888888">box</text>
  </svg>
);

export const EFormsLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#BCD727" />
    <text x="30" y="42" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="44" fill="white" textAnchor="middle">e</text>
    <text x="66" y="42" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="44" fill="#888888">forms</text>
  </svg>
);

export const OpenBoxLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <svg viewBox="0 0 150 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="30" height="30" stroke="#6B7280" strokeWidth="2" />
    <path d="M2 15L32 15" stroke="#6B7280" strokeWidth="2" />
    <text x="40" y="25" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="16" fill="#6B7280" letterSpacing="1">OPEN BOX</text>
  </svg>
);