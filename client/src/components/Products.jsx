import React, {useEffect, useState} from 'react';
import {Container} from "./styledContainer/productsStyle";
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

    }, [cat, products, filters]);
    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price))
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }

    }, [sort])
    return (
        <>
            <Container>
                {/*{filteredProducts.map((item, index) => <Product key={`${item}_${index}`} {...item}/>)}*/}
                {cat
                    ? filteredProducts.map((item,index) => <Product item={item} key={`${item}_${index}`} />)
                    : products
                        .slice(0, 8)
                        .map((item,index) => <Product item={item} key={`${item}_${index}`} />)}
            </Container>
        </>
    );
};

export default Products;