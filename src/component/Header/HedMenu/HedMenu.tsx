import {GlobalButton} from "../../globalComponent/GlobalButton";
import styled from "styled-components";
import {Link} from "react-router-dom";


export const HedMenu = () =>{
    return(
        <MyHedMenu>
            <Link to={'https://ershisan99.github.io/student-notes/'} target="_blank">Student-Notes</Link>
            <Link to={'https://poe.com/chatgpt'} target="_blank">CHAT-GPT</Link>
            {/*<a href="https://ershisan99.github.io/student-notes/" target="_blank">student-notes</a>*/}
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
  & a {
    text-decoration: none;
    width: 100px;
    box-shadow: 2px 2px 2px black;
    padding: 4px;
    border-radius: 4px;
    text-align: center;
    color: white;
    font-weight: bold;
    &:hover{
      background: black;
    }
  }
`