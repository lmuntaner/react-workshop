import React from 'react';

const InputRange = ({ color, label, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={ color }>{ label }</label>
      <input type="range" min={0} max={255} value={ value } onChange={ handleChange } id={ color }/>
    </div>
  )
};

export default InputRange;
