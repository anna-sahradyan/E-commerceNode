import React, {useEffect, useState} from 'react';
import {Container} from "./styledContainer/productsStyle";
import {popularProducts} from "./data/db";
import Product from "./Product";
import axios from "axios";

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:4000/products?category=${cat}` : `http://localhost:4000/products`);
                setProducts(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        getProducts();
    }, [cat])
    useEffect(() => {
        cat && setFilteredProducts(products.filter((item) => Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
        )));

    }, [cat, products, filters])
    return (
        <>
            <Container>
                {filteredProducts.map((item, index) => <Product key={`${item}_${index}`} {...item}/>)}
            </Container>
        </>
    );
};

export default Products;