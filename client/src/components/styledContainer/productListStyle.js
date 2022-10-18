import styled from "styled-components";
import {mobile} from "../../responsive";

export const Container = styled.div`

`;
export const Title = styled.h1`
margin: 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Filter = styled.div`
  margin: 20px;
${mobile({width:"0 20px",display:"flex",flexDirection:"column"})}
`;
export const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
  ${mobile({marginRight:"0"})}
`;
export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0"})}
`;

export const Option = styled.option`
  background-color: #${props => props.color};

`;
export const CheckBox = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
  & input {
    margin-right: 5px;
    border: none;
    
  }

  margin-right: 5px;
`;
export const CheckBoxColor = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  
`;
