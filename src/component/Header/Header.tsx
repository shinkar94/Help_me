import {HedMenu} from "./HedMenu/HedMenu";
import styled from "styled-components";
import logo from "../../img/logo.jpg";
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <MyHed>
            <NavLink to={'/'} ><Logo src={logo} alt="logo"/></NavLink>
            <HedMenu/>
        </MyHed>
    )

}
const MyHed = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 10px;
  background: rgba(129, 129, 129, 0.4);
`

const Logo = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`