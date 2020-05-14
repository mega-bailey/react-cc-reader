import React from 'react';
import './CCOutput.css';

const ccOutput = (props) => {
  return (
    <div className='cc-container'>
      <div className='top-container'>
        <p className='logo'>Logo</p>
      </div>
      <div className='middle-container'>
        <p className='number'>{props.ccNum}</p>
        <div className='cvv-container'>
          <p className='cvv'>{props.cvv}</p>
          <p className='caption'>CVV</p>
        </div>
      </div>
      <div className='bottom-container'>
        <div className='name-text'>
          <p className='name'>{props.name} </p>
        </div>
        <div className='exp-date-container'>
          <p className='exp-date'>{props.expDate}</p>
        </div>
      </div>
      <div className='bottom-caption-container'>
        <p className='caption'>Name</p>
        <p className='caption'>Exp Date</p>
      </div>
    </div>
  );
};

export default ccOutput;
