import {HedMenu} from "./HedMenu/HedMenu";
import styled from "styled-components";


export const Header = () => {
    return (
        <MyHed>
            {/*<img src="#" alt="logo"/>*/}
            <div>Logo</div>
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
  background: rgba(0, 0, 0, 0.7);
`