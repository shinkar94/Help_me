import React from 'react';
import styled from "styled-components";

import {PageTextType} from "../../reducer/StartPageReducer";
import {useAppSelector} from "../../hoks/hooks";
import {InfLibrary} from "./StartPageModule/InfLibrary";
import {FireLibrary} from "./StartPageModule/FireLibrary";

export const StartPage = () => {
    const statePageText:PageTextType = useAppSelector(state => state.startPage)

    return (
        <Wrapper>
            <h1>Start page</h1>
            <FirePanel>
                <BlockInf>
                    <InfLibrary InfLibrary={statePageText.library.InfLibrary}/>
                </BlockInf>
                <BlockInf>
                    <FireLibrary fireLibrarys={statePageText.library.FireLibrary}/>
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


