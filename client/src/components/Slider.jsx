import React, {useState} from 'react';
import {
    Arrow, Container, Image, ImgContainer, InfoContainer, Wrapper, Slide, Title, Desc, Button
} from "./styledContainer/sliderStyle";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from './data/db'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handelClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else if (direction === 'right'){
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }


    }
    return (<Container>
        <Arrow direction={"left"} onClick={() => handelClick('left')}><ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item, index) => <Slide bg={item.bg} key={`${item}_${index}`}>
                <ImgContainer>
                    <Image
                        src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Show Now</Button>
                </InfoContainer>
            </Slide>)}

        </Wrapper>
        <Arrow direction={'right'} onClick={() => handelClick('right')}><ArrowRightOutlinedIcon/></Arrow>
    </Container>);
};

export default Slider;