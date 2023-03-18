import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {StartPage} from "../Page/StartPage";


export const Content = () =>{
    return(
        <FlexContainer>
            <Routes>
                <Route path={'/'} element={<StartPage />}/>
                <Route path={'/help_me'} element={<StartPage />}/>
                <Route path={'/CRM'} element={<div>CRM page</div>} />
                <Route path={'/Vite'} element={<div>Vite page</div>} />
            </Routes>
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
  flex: 80vw;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  padding: 20px;
  overflow: auto;
`