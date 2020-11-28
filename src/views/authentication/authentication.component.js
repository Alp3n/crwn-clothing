import React from 'react';
import './authentication.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export default function AuthenticationPage() {
  return (
    <div className='authentication-page'>
      <SignIn />
      <SignUp />
    </div>
  );
}
