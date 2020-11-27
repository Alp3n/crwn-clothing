import React from 'react';
import './authentication.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

export default function AuthenticationPage() {
  return (
    <div className='authentication-page'>
      <SignIn />
      {/* form */}
    </div>
  );
}
