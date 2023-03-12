import {GlobalButton} from "../../globalComponent/GlobalButton";
import styled from "styled-components";
import {Link} from "react-router-dom";


export const HedMenu = () =>{
    return(
        <MyHedMenu>
            <Link to={'https://ershisan99.github.io/student-notes/'} target="_blank">student-notes</Link>
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
  background: green;
`