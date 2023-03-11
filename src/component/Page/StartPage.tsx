import React from 'react';
import styled from "styled-components";

export const StartPage = () => {
    return (
        <Wrapper>
            <h1>Start page</h1>
            <FirePanel>
                <BlockInf>
                    <h3>ГОРЯЧИЕ БИБЛИОТЕКИ</h3>
                    <div>
                        <p>yarn add uuid</p>
                        <p>yarn add @types/uuid</p>
                        <p>yarn create react-app newapp --template typescript</p>
                        <p>yarn add react@latest                               -обновить все библиотеки</p>
                        <p>yarn add react-router-dom</p>
                        <p>yarn add @types/react-router-dom</p>
                        <p>yarn add redux react-redux @types/react-redux</p>
                        <p>yarn add axios</p>
                        <p>yarn add redux-thunk</p>
                        <p>yarn add formik</p>
                        <p>yarn add @reduxjs/toolkit</p>
                        <p>-команды для Material UI:</p>
                        <p>yarn add @mui/material @emotion/react @emotion/styled</p>
                        <p>yarn add @mui/icons-material</p>
                        <p>-обновление TS если Material UI не пошел</p>
                        <p>-yarn add typescript</p>
                        <p>-styled-components</p>
                        <p>yarn add styled-components</p>
                        <p>yarn add @types/styled-components</p>
                        <p>yarn add @reduxjs/toolkit</p>
                    </div>
                </BlockInf>
                <BlockInf>
                    <h3>ГОРЯЧИЕ КЛАВИШИ</h3>
                    <div>
                        <p>shift+f6    -переименовать везде</p>
                        <p>Ctrl+shift+v    –достать из буфера</p>
                        <p>Ctrl+shift+n    –глобальный поиск</p>
                        <p>Ctrl+space –подсказать путь в импорте</p>
                        <p>Ctrl+P –подсказать аргументы в импорте</p>
                        <p>alt+F1 -  Enter  -показать в дереве файл, в котором находишься</p>
                        <p>alt+Enter -заменить/  обернуть в кавычки, в бэктики</p>
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
  gap: 10px;
`
const BlockInf = styled.div`
  background: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgb(0, 0, 0);
  h3 {
    color: brown;
  }
  p {
    margin: 2px;
    color: rgb(215,215,215);
  }
`
