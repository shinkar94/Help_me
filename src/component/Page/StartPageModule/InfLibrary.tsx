import React, {FC} from 'react';
import {
    LibraryInfoType,
    startPageAction,
} from "../../../reducer/StartPageReducer";
import imgTick from "../../../img/icon/tick.png";
import imgCopy from "../../../img/icon/copy.png";
import styled from "styled-components";
import {useAppDispatch} from "../../../hoks/hooks";
import {toast} from "react-toastify";

type InfLibraryType = {
    InfLibrary: LibraryInfoType
}

export const InfLibrary:FC<InfLibraryType> = (props) => {
    const {InfLibrary} = props
    const dispatch = useAppDispatch()
    return (
        <>
        <h3>{InfLibrary.title}</h3>
        <div>
            {InfLibrary.infBlock.map((el) =>{
                const clickTitle = () =>{
                    dispatch(startPageAction.toggleTitle({id: el.idInfText}))
                }
                return(
                    <BlockText key={el.idInfText}>
                        <h3 onClick={clickTitle} style={el.bgColor ? { backgroundColor: el.bgColor } : {}}>{el.title}</h3>
                        {el.titleStatus && el.textLibrary.map((text, index) => {
                            const onclickHandler = () => {
                                navigator.clipboard.writeText(text)
                            }
                            const clickCopyBtn = () =>{
                                dispatch(startPageAction.toggleOpacity({id: el.idInfText, opacity: 1}))
                                setTimeout(()=>{
                                    dispatch(startPageAction.toggleOpacity({id: el.idInfText, opacity: 0}))
                                },2000)
                            }
                            return(
                                <TextContent key={index}>
                                    <CopyBtn onClick={onclickHandler}>
                                        <ImgTick  src={imgTick} alt="imgTick"  tick={el.opacityTick}/>
                                        <img className="img2" src={imgCopy} alt="imgCopy" onClick={clickCopyBtn} />
                                    </CopyBtn>
                                    <p>{text}</p>
                                </TextContent>
                            )
                        })}
                    </BlockText>
                )
            })}
        </div>
        </>
    );
};

const BlockText = styled.div`
  background: gray;
  border-radius: 5px;

  & h3 {
    background: rgba(129, 129, 129, 0.5);
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 2px 2px black;
    margin: 2px;

    &:hover {
      background: rgb(152, 82, 82);
    }
  }
`
const TextContent = styled.div`
  display: flex;
  max-width: 400px;
  & p{
    margin-left: 0;
    width: 80%;
  }
`

const CopyBtn = styled.button`
  position: relative;
  display: inline-flex;
  background: none;
  border: none;
  width: 60px;
  cursor: pointer;
`
const ImgTick = styled.img<{tick: number}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props.tick};
`
