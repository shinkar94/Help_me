import styled from "styled-components";
import {ListMenu} from "./ListMenu/ListMenu";
import React, {useState} from "react";
import {v1} from "uuid";
import {useAppSelector} from "../../hoks/hooks";
import {ListArrayType} from "../../reducer/SideBarReducer";

type StatusMenuType = {
    id: string
    nameMenu: string
    isDone: boolean
}

export const Menu = () => {
    const StateBar:ListArrayType = useAppSelector(state => state.sideBar.StateMenu)
    const [statusMenu, setMenu] = useState<StatusMenuType[]>([
        {id: v1(), nameMenu: "React", isDone: false},
        {id: v1(), nameMenu: "Js", isDone: false},
        {id: v1(), nameMenu: "CSS", isDone: false},
    ])
    const addNewStatus = (id: string, newDone: boolean) => {
        setMenu(statusMenu.map((el) => el.id === id ? {...el, isDone: newDone} : el))
    }
    const Menu = statusMenu.map((el) => {
        let stateMenu
        if (el.nameMenu === "React") {
            stateMenu = StateBar.ReactInf
        } else if (el.nameMenu === 'Js') {
            stateMenu = StateBar.JSInf
        } else {
            stateMenu = StateBar.CSSInf
        }
        return <ListMenu key={el.id}
                         state={stateMenu}
                         nameList={el.nameMenu}
                         status={el.isDone}
                         addNewStatus={addNewStatus}
                         idMenu={el.id}
        />
    })
    return (
        <ContentMenu>
            {Menu}
        </ContentMenu>
    )
}

const ContentMenu = styled.div`
  flex: 10px;
  position: relative;
  top: 0;
  left: 0;
  background: rgba(129, 129, 129, 0.4);
`