import styled from "styled-components";
import {mobile} from "../../responsive";

export const Container = styled.div`
  //background-color: #D9DCDB;

`;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px",flexDirection:"column"})}

`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}

`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  font-weight: 500;
  ${mobile({padding:"10px"})}
`;
export const Title = styled.h1`
  font-weight: 300;

`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
export const Desc = styled.p`
  margin: 20px 0;

`;
export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  ${mobile({width:"100%"})}
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;

`;
export const FilterTitle = styled.span`

  font-size: 20px;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;

`;
export const FilterSizeOption = styled.option`


`;
export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight:700;
`;
export const Amount = styled.span`
 width: 30px;
  height: 30px;
  display: flex;
  border-radius: 10px;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const Button = styled.button`
padding: 15px;
  border:1px solid teal ;
  cursor: pointer;
  font-weight: 600;
  &:hover{
    background-color: #DCDEDD;
  }
`;







