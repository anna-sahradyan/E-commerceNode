import React from 'react';
import {
    Center, ContactItem, Container, Desc,  Left,List, ListItem, Logo, Right, SocialContainer, SocialIcon, Title,Payment
} from "./styledContainer/footerStyl";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Pinterest from "@mui/icons-material/Pinterest";
import {Twitter} from "@mui/icons-material";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Footer = () => {
    return (
        <>
            <Container>
                {/*!left part*/}
                <Left><Logo>Ann.</Logo>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad architecto, beatae
                        consectetur dolor doloribus eaque earum ex facilis harum laborum modi, molestiae placeat
                        possimus saepe suscipit temporibus totam voluptatibus.</Desc>
                    <SocialContainer>
                        <SocialIcon color={'3B5999'}>
                            <FacebookIcon/>
                        </SocialIcon>
                        <SocialIcon color={'E4405F'}>
                            <InstagramIcon/>
                        </SocialIcon>
                        <SocialIcon color={'E60023'}>
                            <Pinterest/>
                        </SocialIcon>
                        <SocialIcon color={'55ACEE'}>
                            <Twitter/>
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                {/*!center part*/}
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                        <ListItem>Order Tracking</ListItem>

                    </List>
                </Center>

                {/*!right part*/}
                <Right>

                    <Title>Contact</Title>
<ContactItem><RoomIcon style={{marginRight:"10px"}}/>
    Armenia Yerevan Charenc street
</ContactItem>
                    <ContactItem><PhoneIcon style={{marginRight:"10px"}}/>
                        +374 55 85 02 15
                    </ContactItem>
                    <ContactItem><MailOutlineIcon style={{marginRight:"10px"}}/>
                       anna.paruryan72@gmail.com
                    </ContactItem>
                    <Payment src={'https://i.ibb.co/Qfvn4z6/payment.png'}/>
                </Right>

            </Container>
        </>
    );
};

export default Footer;