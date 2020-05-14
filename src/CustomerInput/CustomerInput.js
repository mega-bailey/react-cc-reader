import React from 'react';
import './CustomerInput.css';

const customerInput = (props) => {
  return (
    <div className='input-container'>
      <h1 className='heading-1'>Please enter your payment details</h1>

      <div className='row'>
        <h2 className='heading-2'>Full Name:</h2>
        <input
          type='text'
          maxLength='35'
          onChange={props.changeName}
          value={props.name}
        />
      </div>
      <div className='row'>
        <h2 className='heading-2'>CC#:</h2>
        <input
          type='text'
          maxLength='19'
          onChange={props.changeCC}
          value={props.ccNum}
        />
      </div>

      <div className='row'>
        <h2 className='heading-2'>Exp Date:</h2>
        <input
          className='med-input'
          type='text'
          maxLength='5'
          onChange={props.changeExp}
          value={props.expDate}
        />
        <h2 className='heading-2'>CVV#:</h2>
        <input
          className='short-input'
          type='text'
          maxLength='3'
          onChange={props.changeCVV}
          value={props.cvv}
        />
      </div>
    </div>
  );
};

export default customerInput;
