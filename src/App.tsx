import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";

import {Menu} from "./component/Menu/Menu";
import {Content} from "./component/Content/Content";
import styled from "styled-components";
import fonImg from './img/fon.jpg';
import {StateType} from "./MyState/MyState";
import HeaderAppBar from "./component/Header/HeaderAppBar";

type AppType = {
    state: StateType
}

function App(props:AppType){
    return (
        <GlobalWrapper>
            <Header />
            {/*<HeaderAppBar />*/}
            <AllContent>
                <Menu state={props.state.StateMenu}/>
                <Content />
            </AllContent>
        </GlobalWrapper>
    );
}

export default App

const GlobalWrapper = styled.div`
  background-image: url(${fonImg});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`
const AllContent = styled.header`
  display: flex;
  border: 0;
  margin: 0;
  padding: 0;
`
