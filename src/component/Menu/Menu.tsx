import styled from "styled-components";
import {ListMenu} from "./ListMenu/ListMenu";
import React, {useState} from "react";
import {v1} from "uuid";
import {ListArrayType} from "../../MyState/MyState";



type MenuType = {
    state: ListArrayType
}
type StatusMenuType = {
    id: string
    nameMenu: string
    isDone: boolean
}

export const Menu: React.FC<MenuType> = (props) => {
    const {state} = props;
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
            stateMenu = state.ReactInf
        } else if (el.nameMenu === 'Js') {
            stateMenu = state.JSInf
        } else {
            stateMenu = state.CSSInf
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
  background: rgba(129, 129, 129, 0.4);
`