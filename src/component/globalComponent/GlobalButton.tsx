import React from "react";
import styled from "styled-components";

type GlobalButtonType = {
    nameBtn: string
}

export const GlobalButton:React.FC<GlobalButtonType> = ({nameBtn}) =>{
    return(
        <MyBtn>{nameBtn}</MyBtn>
    )
}

const MyBtn = styled.button`
  background: none;
  color: white;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.74);
  }
`