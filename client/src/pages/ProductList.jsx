import React, {useState} from 'react';
import {
    Container, Filter, FilterContainer, FilterText, Select, Option, Title, CheckBox, CheckBoxColor
} from "../components/styledContainer/productListStyle";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    return (<>
        <Container>
            <Nav/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select name={"color"} onChange={handleFilters}>
                        <Option disabled value={""}>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name={"size"} onChange={handleFilters}>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter><FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value={"newest"}>Newest</Option>
                        <Option value={"asc"}>Price(asc)</Option>
                        <Option value={"desc"}>Black(desc)</Option>

                    </Select>
                </Filter>

            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <NewsLetter/>
            <Footer/>
        </Container>
    </>);
};

export default ProductList;