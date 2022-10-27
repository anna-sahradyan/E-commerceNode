import React from 'react';
import {Button, Container, Image, Info, Title} from "./styledContainer/categoryItemStyle";
import {Link} from "react-router-dom";

const CategoryItem = ({cat,img,title}) => {
    return (
        <>
            <Container>
                <Link to={`/products/${cat}`}>
                <Image src={img}/>
                <Info>
                    <Title>{title}</Title>
                    <Button>Show Now</Button>
                </Info>
                </Link>
            </Container>
        </>
    );
};

export default CategoryItem;