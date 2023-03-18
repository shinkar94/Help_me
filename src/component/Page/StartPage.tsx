import React from 'react';
import styled from "styled-components";
import imgCopy from '../../img/icon/copy.png'

export const StartPage = () => {
    const pageText = {
        library: {
            title: "ГОРЯЧИЕ БИБЛИОТЕКИ",
            textLibrary: [
                {text: "yarn add uuid", comment: ""},
                {text: "yarn add @types/uuid", comment: ""},
                {text: "yarn create react-app newapp --template typescript", comment: ""},
                {text: "yarn add react@latest", comment: "-обновить все библиотеки"},
                {text: "yarn add react-router-dom", comment: ""},
                {text: "yarn add @types/react-router-dom", comment: ""},
                {text: "yarn add redux react-redux @types/react-redux", comment: ""},
                {text: "yarn add axios", comment: ""},
                {text: "yarn add redux-thunk", comment: ""},
                {text: "yarn add formik", comment: ""},
                {text: "yarn add @reduxjs/toolkit", comment: ""},
                {text: "-команды для Material UI:", comment: "-команды для Material UI"},
                {text: "yarn add @mui/material @emotion/react @emotion/styled", comment: ""},
                {text: "yarn add @mui/icons-material", comment: ""},
                {text: "-обновление TS если Material UI не пошел", comment: ""},
                {text: "-yarn add typescript", comment: ""},
                {text: "-styled-components", comment: ""},
                {text: "yarn add styled-components", comment: ""},
                {text: "yarn add @types/styled-components", comment: ""},
                {text: "yarn add @reduxjs/toolkit", comment: ""},
                {text: "npx -p @storybook/cli sb init", comment: ""},
            ]
        }

    }

    return (
        <Wrapper>
            <h1>Start page</h1>
            <FirePanel>
                <BlockInf>
                    <h3>{pageText.library.title}</h3>
                    <div>
                        {pageText.library.textLibrary.map((el, index) => {
                            const onclickHandler = () => {
                                navigator.clipboard.writeText(el.text)
                            }
                            const StyleBtn = {background: "none", border: "none", width: "60px", cursor: "pointer"}
                            const ImgStyle = {width: "30px", height: "20px"}
                            return (
                                <BlockText key={index}>
                                    <button onClick={onclickHandler} style={StyleBtn}><img src={imgCopy} alt="imgCopy" style={ImgStyle}/>
                                    </button>
                                    <p>{el.text}</p>
                                </BlockText>
                            )
                        })}
                    </div>
                </BlockInf>
                <BlockInf>
                    <h3>ГОРЯЧИЕ КЛАВИШИ</h3>
                    <div>
                        <p>shift+f6 -переименовать везде</p>
                        <p>Ctrl+shift+v –достать из буфера</p>
                        <p>Ctrl+shift+n –глобальный поиск</p>
                        <p>Ctrl+space –подсказать путь в импорте</p>
                        <p>Ctrl+P –подсказать аргументы в импорте</p>
                        <p>alt+F1 - Enter -показать в дереве файл, в котором находишься</p>
                        <p>alt+Enter -заменить/ обернуть в кавычки, в бэктики</p>
                        <p>alt+Ctrl+Z - откатить назад изменения в проекте в окне коммитов</p>
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
  cursor: pointer;
  transition: 0.5s;

  h3 {
    color: white;
    text-shadow: 0px 2px black;
  }

  p {
    margin: 2px;
    color: rgb(0, 0, 0);
    font-family: cursive;
    color: rgba(98, 98, 98, 0);
  }

  img {
    opacity: 0;
  }

  &:hover {
    background: rgba(37, 37, 37, 0.53);
  }

  &:hover p {
    color: #b7b7b7;
  }

  &:hover img {
    opacity: 1;
  }
`

const BlockText = styled.div`
  display: flex;
  gap: 4px;
  box-shadow: 0px 0px 2px black;

  &:hover {
    background: #2d2d2d;
  }
  &:hover p{
    color: white;
  }
`
