import React from 'react';
import Search from './Search';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <ImgStyled>
      <header>
        <nav className='nav navbar fixed-top bg-primary py-2'>
          <div className='d-flex container-fluid justify-content-between w-75'>
            <div className='d-flex justify-content-end '>
              <div className='d-flex'>
                <img
                  className='nav-logo logo brand nav-brand brand'
                  src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
                  alt='flipkart'
                  title='flipkart'
                />
              </div>
            </div>
            <Search />
            <button className='btn btn-light btn-sm rounded px-5 text-primary '>
              Login
            </button>
            <a
              href=''
              className='text-decoration-none text-white mx-2 font-weight-bold'
            >
              become a seller
            </a>
            <a href='' className='text-decoration-none text-white'>
              more
            </a>

            <button className='btn btn-primary'>
              <i className='fa-solid fa-cart-shopping'></i>
              <span className='text-capitalize ms-2'>cart</span>
            </button>
          </div>
        </nav>
      </header>
    </ImgStyled>
  );
}

const ImgStyled = styled.div`
  .brand {
    width: 75px;
  }
  .nav {
    // margin-left: 10px;
    height: 56px;
    position: absolute;
  }
  body {
    margin-top: 5px;
    max-height: 10px;
  }
`;
