import React from 'react';
import styled from 'styled-components';
import { ListFilter } from '../components/ListFilter';
import { useGlobalContext } from '../context';

export default function ProductList() {
  const { setQueryString, queryString, productList, categories, brands } =
    useGlobalContext();

  const handleBrand = (brand) => {
    setQueryString(queryString.concat(`&brand=${brand}`));
  };
  console.log(queryString);

  return (
    <Wrapper>
      <div className='flex-item item1 p-3'>
        <h5 className='filter-header'>filters</h5>
        <div className='filters text-uppercase'>
          <div className='filter-item brand-filter'>
            <h6>brands</h6>
            <div className='check-boxes'>
              {brands.map((brand, index) => {
                return (
                  <ListFilter
                    label={brand}
                    id={brand}
                    key={index}
                    onClick={() => handleBrand({ brand })}
                  />
                );
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
                  src='https://rukminim1.flixcart.com/image/416/416/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70'
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
    grid-template-columns: repeat(6, 200px);
    grid-template-rows: auto;
  }
`;
