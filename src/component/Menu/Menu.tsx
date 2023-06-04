import styled from "styled-components";
import {ListMenu} from "./ListMenu/ListMenu";
import React, {useState} from "react";
import {v1} from "uuid";
import {useAppSelector} from "../../hoks/hooks";
import {stateMenuSelector} from "../../reducer/selectors";

type StatusMenuType = {
    id: string
    nameMenu: string
    isDone: boolean
}

export const Menu = () => {
    const StateBar = useAppSelector(stateMenuSelector)
    const [statusMenu, setMenu] = useState<StatusMenuType[]>([
        {id: v1(), nameMenu: "React", isDone: false},
        {id: v1(), nameMenu: "Js", isDone: false},
        {id: v1(), nameMenu: "CSS", isDone: false},
        {id: v1(), nameMenu: "Auxiliary", isDone: false}
    ])
    const addNewStatus = (id: string, newDone: boolean) => {
        setMenu(statusMenu.map((el) => el.id === id ? {...el, isDone: newDone} : el))
    }
    const Menu = statusMenu.map((el) => {
        let stateMenu
        switch (el.nameMenu) {
            case 'React':
                stateMenu = StateBar.ReactInf
                break
            case 'Js':
                stateMenu = StateBar.JSInf
                break
            case 'CSS':
                stateMenu = StateBar.CSSInf
                break
            default: stateMenu = StateBar.Auxiliary
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