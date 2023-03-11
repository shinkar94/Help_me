import React from "react";
import styled from "styled-components";

type ImgType = {
    nameImg: string
    extensImg: string
    altImg: string
}

export const Img:React.FC<ImgType> = (props) =>{
    const {nameImg, extensImg, altImg} = props
    return(
        <Image src={`/icon/${nameImg}.${extensImg}`} alt={altImg}/>
    )
}

const Image = styled.img`
  width: 20px;
  height: 20px;
`