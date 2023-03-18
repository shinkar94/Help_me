import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";

import {Menu} from "./component/Menu/Menu";
import {Content} from "./component/Content/Content";
import styled from "styled-components";
import {StateType} from "./MyState/MyState";
import HeaderAppBar from "./component/Header/HeaderAppBar";
// @ts-ignore
import videoFon from './video/fon.mp4';
// @ts-ignore
import audio from './audio/audio.mp3';

type AppType = {
    state: StateType
}

function App(props:AppType){
    return (
        <GlobalWrapper>
            <video autoPlay muted loop preload="auto" style={{width: "100%", height:'100vh', objectFit: "cover"}}>
                <source type="video/mp4" src={videoFon} />
            </video>
            {/*<audio controls src={audio} style={{position: "absolute", bottom: "0", right: "0", zIndex: 2}}></audio>*/}
            <GlobalContainer>
                <Header />
                <AllContent>
                    <Menu state={props.state.StateMenu}/>
                    <Content />
                </AllContent>
            </GlobalContainer>
        </GlobalWrapper>
    );
}

export default App
const GlobalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`


const GlobalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: none;
  overflow: hidden;
`
const AllContent = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border: 0;
  margin: 0;
  padding: 0;
`
