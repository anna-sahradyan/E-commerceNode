import React from 'react';
import {
    Container, Filter, FilterContainer, FilterText, Select, Option, Title, CheckBox, CheckBoxColor
} from "../components/styledContainer/productListStyle";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";


const ProductList = () => {

    return (<>
        <Container>
            <Nav/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select>
                    <Option disabled selected value={""} >Color</Option>
                    <Option color={'FFFFFF'} value={""}>White</Option>
                    <Option color={'000000'} value={""}>Black</Option>
                    <Option color={'FE0202'} value={""}>Red</Option>
                    <Option color={'29A0DC'} value={""}>Blue</Option>
                    <Option color={'45AD04'} value={""}>Green</Option>
                </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter><FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price(asc)</Option> <Option>Black(desc)</Option>

                    </Select>
                </Filter>

            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    </>);
};

export default ProductList;