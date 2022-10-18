import styled from "styled-components";
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:  all 0.5s ease;
`;
export const Container = styled.div`
  position: relative;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e4e4e450;
  box-shadow: 0 2px 5px #a3a3a3;
  transition: 1.5s;
  cursor: pointer;
  &:hover ${Info}{
    opacity: 1;
  }

`;
export const Image = styled.img`

  height: 75%;
  z-index: 2;

`;


export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover{
    background-color: bisque;
    transform: scale(1.1);
  }
`;


