import React from 'react';
import {Search} from "@material-ui/icons";
import {
    Input,
    Container,
    Wrapper,
    Left,
    SearchContainer,
    Language,
    Right,
    Center,
    Logo,
    MenuItem
} from './styledContainer/navStyle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Badge} from "@material-ui/core";
import {useSelector} from "react-redux";



const Nav = () => {
    const quantity= useSelector(state => state.cart.quantity);
    console.log(quantity)
    return (<>
        <Container>
            <Wrapper>
                <Left><Language>En</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>

                </Left>

                <Center>
                    <Logo>Ann.</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary" overlap="rectangular">
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>

    </>);
};

export default Nav;