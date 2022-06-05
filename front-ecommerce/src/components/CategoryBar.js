import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export default function CategoryBar() {
  const { categories, setQueryString } = useGlobalContext();
  const catButton = (cat) => {
    setQueryString(+`${cat}`);
  };
  return (
    <Wrapper>
      <header className='mt-5'>
        <ul className='nav justify-content-around'>
          {categories.map((cat, index) => {
            return (
              <li className='nav-item' key={index}>
                <button
                  href=''
                  className='btn btn-white my-1 nav-link'
                  onClick={catButton(cat)}
                >
                  {cat}
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  height: 49px;
  border-bottom: solid #ccc 1px;

  header {
    text-emphasis: 5px;
  }
`;
