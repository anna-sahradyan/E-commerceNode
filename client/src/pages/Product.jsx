import React, {useEffect, useState} from 'react';
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
import {useLocation} from "react-router-dom";
import {publicRequest} from "../api/apiRequest";
//import axios from "axios";
//import * as api from "../api/index";

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(1)
    //!useEffect zone
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`);
                setProduct(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProduct();
    }, [id]);
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 &&
            setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }
    const handleClick = () => {

    }
    return (<>

            <Container>
                <Nav/>
                <Announcement/>
                <Wrapper>
                    <ImgContainer>
                        <Image
                            src={product.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Desc>{product.desc}</Desc>
                        <Price>$ {product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>
                                    Color
                                </FilterTitle>
                                {product.color?.map((c, index) => (
                                    <FilterColor color={c} key={`${c}_${index}`} onClick={() => setColor(c)}/>
                                ))}
                            </Filter>
                            <Filter>
                                <FilterTitle>
                                    Size
                                </FilterTitle>
                                <FilterSize onChange={(e) => setSize(e.target.value)}>
                                    {product.size?.map((s, index) => (
                                        <FilterSizeOption key={`${s}_${index}`}>{s}</FilterSizeOption>
                                    ))}
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity("dec")}/>
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity("inc")}/>
                            </AmountContainer>
                            <Button onClick={handleClick}>Add To Cart</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <NewsLetter/>
                <Footer/>
            </Container>
        </>
    );
};

export default Product;