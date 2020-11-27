import React from 'react';
import './form-input.styles.scss';

export default function FormInput({ handleChange, label, ...restProps }) {
  return (
    <div className='form-input-group'>
      {label ? (
        <label
          className={`${
            restProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <input className='form-input' onChange={handleChange} {...restProps} />
    </div>
  );
}
