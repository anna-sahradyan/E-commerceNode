import React from 'react';
import {
    Container,
    Image,
    ImgContainer,
    Wrapper,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    Button
} from "../components/styledContainer/productPageStyle";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";


const Product = () => {
    return (<>

        <Container>
            <Nav/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image
                        src={'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg'}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Jacket</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dolore dolorem,
                        ex excepturi ipsa, itaque magnam nesciunt nihil odit quibusdam sed velit? At blanditiis
                        laudantium magni sequi sit tenetur.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>

                            <FilterColor color={'black'}/> <FilterColor color={'darkblue'}/> <FilterColor
                            color={'grey'}/>


                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Size
                            </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    </>);
};

export default Product;