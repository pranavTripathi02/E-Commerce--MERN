import React from 'react';

export function ListFilter({ label, id }) {
  return (
    <div className='form-check'>
      <input
        className='form-check-input rounded-0'
        type='checkbox'
        value=''
        id={id}
      />
      <label className='form-check-label' htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export function ClearFilter() {
  return (
    <div className='form-check'>
      <input
        className='form-check-input rounded-0'
        type='checkbox'
        value=''
        id='clear-all'
      />
      <label className='form-check-label' htmlFor='clear-all'>
        clear all
      </label>
    </div>
  );
}
