import React from 'react';

export function ListFilter({ label, id }) {
  return (
    <div class='form-check'>
      <input
        class='form-check-input rounded-0'
        type='checkbox'
        value=''
        id={id}
      />
      <label class='form-check-label' for={id}>
        {label}
      </label>
    </div>
  );
}

export function ClearFilter() {
  return (
    <div class='form-check'>
      <input
        class='form-check-input rounded-0'
        type='checkbox'
        value=''
        id='clear-all'
      />
      <label class='form-check-label' for='clear-all'>
        clear all
      </label>
    </div>
  );
}
