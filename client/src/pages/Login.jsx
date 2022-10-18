import React from 'react';
import { Button, Container, Form, Input, Title, Wrapper,Link} from "../components/styledContainer/loginStyle";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Login = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>SIGN IN </Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'username'}/>
                        <Input placeholder={'password'}/>
                        <Button>LOGIN</Button>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?<ArrowForwardIcon color={'primary'}style={{position:'absolute',top:"61.5%",left:"55%"}}/></Link>
                        <Link>CREATE A NEW ACCOUNT<ArrowForwardIcon color={'primary'}style={{position:'absolute',top:"415px",left:"50%"}}/></Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    );
};

export default Login;