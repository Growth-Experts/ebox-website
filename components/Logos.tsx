import React from 'react';

export const EBoxLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <img src="/images/ebox-logo.svg" alt="eBox" className={className} />
);

export const EFormsLogo: React.FC<{ className?: string; variant?: 'default' | 'white' }> = ({ className = "h-8", variant = "default" }) => (
  <img
    src={variant === 'white' ? "/images/eforms-logo-white.png" : "/images/eforms-logo.png"}
    alt="eForms"
    className={className}
  />
);

export const OpenBoxLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <img src="/images/openbox-logo.svg" alt="Open Box" className={className} />
);