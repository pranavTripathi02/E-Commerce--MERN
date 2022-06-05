import React from 'react';
import styled from 'styled-components';
import { ListFilter } from '../components/ListFilter';
import { useGlobalContext } from '../context';

export default function ProductList() {
  const { setQueryString, productList, categories, brands } =
    useGlobalContext();

  // console.log(productList.product_img[0]);
  return (
    <Wrapper>
      <div className='flex-item item1 p-3'>
        <h5 className='filter-header'>filters</h5>
        <div className='filters text-uppercase'>
          <div className='filter-item brand-filter'>
            <h6>brands</h6>
            <div className='check-boxes'>
              {brands.map((brand, index) => {
                return <ListFilter label={brand} id={brand} key={index} />;
              })}
            </div>
          </div>
          <div className='filter-item rating-filter'>
            <h6>customer ratings</h6>
            <div className='check-boxes'>
              <ListFilter label='1 stars & above' id='1' />
              <ListFilter label='2 stars & above' id='2' />
              <ListFilter label='3 stars & above' id='3' />
              <ListFilter label='4 stars & above' id='4' />
            </div>
          </div>
          <div className='filter-item discount-filter'>
            <h6>
              discounts
              <div className='check-boxes'>
                <ListFilter label='10% or more' id='10'></ListFilter>
                <ListFilter label='20% or more' id='20'></ListFilter>
                <ListFilter label='30% or more' id='30'></ListFilter>
                <ListFilter label='40% or more' id='40'></ListFilter>
              </div>
            </h6>
          </div>
        </div>
      </div>
      <div className='flex-item item2'>
        <div className='grid-container'>
          {productList.map((product, index) => {
            return (
              <div className='card m-2' key={index}>
                <img
                  className='card-img-top'
                  src={product.product_img[0]}
                  alt='product image'
                />
                <div className='card-footer'>
                  <p>{product.product_name}</p>
                  <p>{product.discounted_price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  min-width: 50%;
  max-width: 95%;
  margin: 0.5rem auto;

  .flex-item {
    background-color: #fff;
    width: 40%;
    height: 100vh;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .item1 {
    min-width: 15rem;
    max-width: 20rem;
  }
  .item2 {
    min-width: 60rem;
    width: 80rem;
  }
  .filter-item {
    border-bottom: #edeff2 solid 1px;
    border-width: 150%;
    padding-top: 15px;
    padding-bottom: 20px;
    margin-bottom: 25px;
  }
  .check-boxes {
    margin-top: 15px;
    font-size: 0.85rem;
  }
  .filter-header {
    width: 100%;
    border-bottom: #edeff2 solid 1px;
    padding-top: 15px;
    padding-bottom: 20px;
    margin-bottom: 25px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 250px);
    grid-template-rows: auto;
  }
`;
