import React from 'react';
import {Container, Wrapper, Title, Form, Input, Agreement, Button} from "../components/styledContainer/registerStyle";

const Register = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'name'}/>
                        <Input placeholder={'last name'}/>
                        <Input placeholder={'email'}/>
                        <Input placeholder={'username'}/>
                        <Input placeholder={'password'}/>
                        <Input placeholder={'confirm password'}/>

                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>

                    </Form>

                </Wrapper>
            </Container>
        </>
    );
};

export default Register;