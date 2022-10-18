import styled from "styled-components";
import {mobile} from "../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
 
`;


export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"20vh"})}

`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;


`;
export const Button = styled.button`
  border: none;
  padding: 7px;
  color: gray;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 3px;

`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;





