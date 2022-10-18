import styled from "styled-components";
import {mobile} from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.4),
  rgba(255, 255, 255, 0.4)), url(/e-commerce/feshon.jpg);
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width:"75%"})}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;

`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;

`;
export const Agreement = styled.span`
  font-size: 13px;
  margin: 20px 0;
  font-weight: bold;


`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
`;