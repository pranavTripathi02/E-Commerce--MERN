import React from 'react';
import styled from 'styled-components';

export default function CategoryBar() {
  return (
    <Wrapper>
      <header className='mt-5'>
        <ul className='nav justify-content-around'>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              $
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              $
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              $
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              $
            </a>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  body {
    margin-top: 20rem;
  }
  header {
    margin-top: 70rem;
    border-bottom: solid #ccc 1px;
    text-emphasis: 5px;
  }
`;
