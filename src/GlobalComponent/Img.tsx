import React from "react";
import styled from "styled-components";

type ImgType = {
    nameImg: string
    altImg: string
}

export const Img:React.FC<ImgType> = (props) =>{
    const {nameImg, altImg} = props
    return(
        <Image src={nameImg} alt={altImg}/>
    )
}

const Image = styled.img`
  width: 20px;
  height: 20px;
`