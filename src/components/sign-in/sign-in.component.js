import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log('there was an error signing in', error.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete='username'
            required
          />
          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            onChange={this.handleChange}
            autoComplete='current-password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignedIn
              type='button'
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
