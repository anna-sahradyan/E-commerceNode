import React from 'react';
import {Button, Container, Desc, Input, InputContainer, Title} from "./styledContainer/newsLetterStyle";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const NewsLetter = () => {
    return (
        <>
            <Container>
                <Title>NewsLetter</Title>
                <Desc>Get timely updates from favorite products</Desc>
                <InputContainer>
                    <Input placeholder={'Your email'}/>
                    <Button><SendOutlinedIcon/></Button>
                </InputContainer>
            </Container>
        </>
    );
};

export default NewsLetter;