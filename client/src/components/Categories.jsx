import React from 'react';
import {Container} from "./styledContainer/categoriesStyle";
import {categories} from "./data/db";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    return (
        <>
         <Container>
             {categories.map((item,index)=><CategoryItem key={`${item}_${index}`}{...item} />)}
         </Container>
        </>
    );
};

export default Categories;