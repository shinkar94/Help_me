import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";
import {Img} from "../../../GlobalComponent/Img";
import {InfObjectType} from "../../../MyState/MyState";


type ListMenuType = {
    nameList: string
    state:InfObjectType[]
    status: boolean
    addNewStatus: (id: string, newDone: boolean)=>void
    idMenu: string
}

export const ListMenu: React.FC<ListMenuType> = (props) => {
    const {nameList, state, addNewStatus, idMenu, status} = props;

    const mapList = state.map((el) => {
        return(
            <Mlink key={el.id}>
                <Img nameImg={el.link} extensImg={el.extension} altImg={el.link}/>
                <NavLink to={`/${el.link}`}>{el.name}</NavLink>
            </Mlink>
        )
    })
    const onClickHandler = () =>{
        addNewStatus(idMenu, !status)
    }

    return (
        <List>
            <TitleList onClick={onClickHandler}>{nameList}</TitleList>
            <BlockLink>
                {status && mapList}
            </BlockLink>
        </List>
    )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 180px;
  padding: 0px 0px;
`
const TitleList = styled.h4`
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  margin: 4px;
  color: rgb(215, 215, 215);

  &:hover {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0), red, rgba(0, 0, 0, 0));
  }
`

const BlockLink = styled.div`
  padding: 0px 4px;
`
const Mlink = styled.div`
  a{
    padding-left: 4px;
    text-decoration: none;
    font-size: 18px;
    color: rgb(215,215,215);
    &:hover{
      color: brown;
    }
  }
`