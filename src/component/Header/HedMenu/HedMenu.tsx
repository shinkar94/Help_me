import {GlobalButton} from "../../globalComponent/GlobalButton";
import styled from "styled-components";


export const HedMenu = () =>{
    return(
        <MyHedMenu>
            <GlobalButton nameBtn={'btn1'}/>
            <GlobalButton nameBtn={'btn2'}/>
            <GlobalButton nameBtn={'btn3'}/>
            <GlobalButton nameBtn={'btn4'}/>
        </MyHedMenu>
    )
}

const MyHedMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  background: green;
`