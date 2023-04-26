import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Header} from "./component/Header/Header";

import {Menu} from "./component/Menu/Menu";
import {Content} from "./component/Content/Content";
import soundIcon from './img/icon/sound.png'
import styled from "styled-components";
// @ts-ignore
import videoFon from './video/fon.mp4';
// @ts-ignore
import audio from './audio/audio.mp3';



function App(){
    const [audioStarted, setAudioStarted] = useState(false);
    function handlePlayClick() {
        setAudioStarted(true);
    }
    const audioRef = useRef<any>(null);
    useEffect(() => {
        if (audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Аудио начало воспроизводиться успешно
                }).catch(() => {
                    // Воспроизведение аудио было заблокировано, попросите пользователя разрешить его
                    audioRef.current.play();
                });
            }
        }
    }, []);
    return (
        <GlobalWrapper>
            <video autoPlay muted loop preload="auto" style={{width: "100%", height:'100vh', objectFit: "cover"}}>
                <source type="video/mp4" src={videoFon} />
            </video>
            <Audio>
                {!audioStarted && (
                    <button onClick={handlePlayClick}><img src={soundIcon} alt="sound"/></button>
                )}
                {audioStarted && (
                    <audio src={audio} loop autoPlay />
                )}
            </Audio>
            {/*<audio controls src={audio} style={{position: "absolute", bottom: "0", right: "0", zIndex: 2}}></audio>*/}
            <GlobalContainer>
                <Header />
                <AllContent>
                    <Menu />
                    <Content />
                </AllContent>
            </GlobalContainer>
        </GlobalWrapper>
    );
}

export default App

const Audio = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 2;

  & button {
    width: 80px;
    height: 80px;
    background: rgba(128, 128, 128, 0.54);
    cursor: pointer;
    border: 0;
    border-radius: 50%;
  }
`

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
