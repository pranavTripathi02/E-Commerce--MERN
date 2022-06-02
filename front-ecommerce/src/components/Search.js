import React from 'react';
import styled from 'styled-components';

export default function Search() {
  return (
    <SearchStyled>
      <div
        className='d-flex justify-content-between'
        style={{ width: '100%', minWidth: '360px' }}
      >
        <form action='' className='container-fluid rounded bg-white py-1'>
          <div className='input-group d-inline-flex w-100 input-group-sm'>
            <input
              type='text'
              placeholder='Search for products, brands and more'
              className='form-control input-group-text bg-white border-0
            px-3 placeholder-sm text-start input'
              style={{ fontSize: '14px' }}
            />
            <button className='input-group-text bg-white border-0'>
              <i className='fa-solid fa-magnifying-glass border-0' />
            </button>
          </div>
        </form>
      </div>
    </SearchStyled>
  );
}

const SearchStyled = styled.div`
  width: 45%;
`;
