import React from 'react';
import {Container} from "./styledContainer/productsStyle";
import {popularProducts} from "./data/db";
import Product from "./Product";

const Products = () => {
    return (
        <>
          <Container>
              {popularProducts.map((item,index)=><Product key={`${item}_${index}`} {...item}/>)}
          </Container>
        </>
    );
};

export default Products;