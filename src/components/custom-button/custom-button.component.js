import React from 'react';
import './custom-button.styles.scss';

export default function CustomButton({
  children,
  isGoogleSignedIn,
  ...restProps
}) {
  return (
    <button
      className={`${isGoogleSignedIn ? 'google-sign-in' : ''} custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
}
