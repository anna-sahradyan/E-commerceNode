import React from 'react';
import {Button, Container, Image, Info, Title} from "./styledContainer/categoryItemStyle";

const CategoryItem = ({img,title}) => {
    return (
        <>
            <Container>
                <Image src={img}/>
                <Info>
                    <Title>{title}</Title>
                    <Button>Show Now</Button>
                </Info>

            </Container>
        </>
    );
};

export default CategoryItem;