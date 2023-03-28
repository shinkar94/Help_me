import React, {useReducer, useState} from 'react';
import styled from "styled-components";
import imgCopy from '../../img/icon/copy.png'
import imgTick from '../../img/icon/tick.png'
import {StartPageReducer, ToggleOpacityAC} from "../../reducer/StartPageReducer";
import {v1} from "uuid";

export type PageTextType = {
    library: LibraryType
    opacity: number
}
export type LibraryType = {
    InfLibrary : LibraryInfoType
    FireLibrary : LibraryFireType
}
export type LibraryInfoType = {
    title: string
    infBlock: InfoBlockType[]
}
export type LibraryFireType = {
    title:string
    fireBlock: FireBlockType[]
}
export type InfoBlockType = {
    title: string,
    textLibrary: string[]
    titleStatus: boolean
    idInfText: string
}
export type FireBlockType = {
    title: string
    fireBtn: string
}


export const StartPage = () => {
    const [opacityTick, tickDispatch] = useReducer(StartPageReducer,{opacity: 0})

    const [pageText, setPageState] = useState<PageTextType>({
        library: {
            InfLibrary : {
                title: "ГОРЯЧИЕ БИБЛИОТЕКИ",
                infBlock: [
                    {idInfText: v1(), title: "UUID", textLibrary: ["yarn add uuid","yarn add @types/uuid"], titleStatus: false},
                    {idInfText: v1(), title: "CRA", textLibrary: ["yarn create react-app newapp --template typescript"], titleStatus: false},
                    {idInfText: v1(), title: "Обновить все библиотеки", textLibrary: ["yarn add react@latest"], titleStatus: false},
                    {idInfText: v1(), title: "RouterDom", textLibrary: ["yarn add react-router-dom","yarn add @types/react-router-dom"], titleStatus: false},
                    {idInfText: v1(), title: "Redux", textLibrary: ["yarn add redux react-redux @types/react-redux"], titleStatus: false},
                    {idInfText: v1(), title: "AXIOS", textLibrary: ["yarn add axios"], titleStatus: false},
                    {idInfText: v1(), title: "Redux-Thunk", textLibrary: ["yarn add redux-thunk"], titleStatus: false},
                    {idInfText: v1(), title: "Redux-Tolkit", textLibrary: ["yarn add @reduxjs/toolkit"], titleStatus: false},
                    {idInfText: v1(), title: "Material UI", textLibrary: ["yarn add @mui/material @emotion/react @emotion/styled","yarn add @mui/icons-material"], titleStatus: false},
                    {idInfText: v1(), title: "Обновление TS если Material UI не пошел", textLibrary: ["yarn add typescript"], titleStatus: false},
                    {idInfText: v1(), title: "Styled-components", textLibrary: ["yarn add styled-components","yarn add @types/styled-components"], titleStatus: false},
                    {idInfText: v1(), title: "Storybook", textLibrary: ["npx -p @storybook/cli sb init"], titleStatus: false},
                ]
            },
            FireLibrary : {
                title: "ГОРЯЧИЕ КЛАВИШИ",
                fireBlock: [
                    {fireBtn: "shift+f6", title: "-переименовать везде"},
                    {fireBtn: "Ctrl+shift+v", title: "–достать из буфера"},
                    {fireBtn: "Ctrl+shift+n", title: "–глобальный поиск"},
                    {fireBtn: "Ctrl+space", title: "–подсказать путь в импорте"},
                    {fireBtn: "Ctrl+P", title: "–подсказать аргументы в импорте"},
                    {fireBtn: "alt+F1-Enter", title: "-показать в дереве файл, в котором находишься"},
                    {fireBtn: "alt+Enter", title: "-заменить/ обернуть в кавычки, в бэктики"},
                    {fireBtn: "alt+Ctrl+Z", title: "откатить назад изменения в проекте в окне коммитов"},
                ]
            }
        },
        opacity: 0
    })

    return (
        <Wrapper>
            <h1>Start page</h1>
            <FirePanel>
                <BlockInf>
                    <h3>{pageText.library.InfLibrary.title}</h3>
                    <div>
                        {pageText.library.InfLibrary.infBlock.map((el) =>{
                            const clickTitle = (id:string) =>{
                                setPageState({
                                    ...pageText,
                                    library: {
                                        ...pageText.library,
                                        InfLibrary:{
                                            ...pageText.library.InfLibrary,
                                            infBlock: pageText.library.InfLibrary.infBlock.map(el => el.idInfText === id ? {...el, titleStatus: !el.titleStatus} : el)
                                        }
                                    }
                                })
                            }
                            return(
                                <BlockText key={el.idInfText}>
                                    <h3 onClick={()=>clickTitle(el.idInfText)}>{el.title}</h3>
                                    {el.titleStatus && el.textLibrary.map((text, index) => {
                                        const onclickHandler = () => {
                                            navigator.clipboard.writeText(text)
                                        }
                                        const clickCopyBtn = () =>{
                                            tickDispatch(ToggleOpacityAC(1))
                                            setTimeout(()=>{
                                                tickDispatch(ToggleOpacityAC(0))
                                            },2000)
                                        }
                                        return(
                                            <TextContent key={index}>
                                                <CopyBtn onClick={onclickHandler}>
                                                    <ImgTick  src={imgTick} alt="imgTick"  tick={opacityTick.opacity}/>
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
                </BlockInf>
                <BlockInf>
                    <h3>{pageText.library.FireLibrary.title}</h3>
                    <div>
                        {pageText.library.FireLibrary.fireBlock.map((el)=>{
                            return(
                                <p><span>{el.fireBtn}</span>{el.title}</p>
                            )
                        })}
                    </div>
                </BlockInf>
            </FirePanel>

        </Wrapper>
    );
};

const Wrapper = styled.div`

`
const FirePanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`
const BlockInf = styled.div`
  background: rgba(129, 129, 129, 0.4);
  font-size: 18px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgb(0, 0, 0);
  transition: 0.5s;

  h3 {
    color: white;
    text-shadow: 0px 2px black;
  }

  p {
    margin: 2px;
    font-family: cursive;
    color: rgb(255, 255, 255);
  }

  .img2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 20px;
  }
`

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
