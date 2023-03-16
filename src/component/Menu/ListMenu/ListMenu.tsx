import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";
import {Img} from "../../../GlobalComponent/Img";
import {InfObjectType} from "../../../MyState/MyState";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import {ExpandMore} from "@mui/icons-material";
import Paper from "@mui/material/Paper";


type ListMenuType = {
    nameList: string
    state: InfObjectType[]
    status: boolean
    addNewStatus: (id: string, newDone: boolean) => void
    idMenu: string
}

export const ListMenu: React.FC<ListMenuType> = (props) => {
    const {nameList, state, addNewStatus, idMenu, status} = props;

    const mapList = state.map((el) => {
        return (
            <Mlink key={el.id}>
                <Img nameImg={el.linkImg} altImg={el.img}/>
                <NavLink to={el.homeLink ? `/${el.name}` : `${el.netWorkLink}`}
                         target={!el.homeLink ? "_blank" : "_self"}
                >{el.name}</NavLink>
            </Mlink>
        )
    })
    const onClickHandler = () => {
        addNewStatus(idMenu, !status)
    }

    return (
        <List>
            <Paper elevation={2} style={{background: "0"}}>
                <Accordion onClick={onClickHandler} style={{borderRadius: "0px", background: "rgba(129, 129, 129, 0.4)", color: "white", borderBottom: "1px solid red"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{nameList}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <BlockLink>
                            {status && mapList}
                        </BlockLink>
                    </AccordionDetails>
                </Accordion>
            </Paper>

        </List>
    )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
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
  a {
    padding-left: 4px;
    text-decoration: none;
    font-size: 18px;
    color: rgb(215, 215, 215);

    &:hover {
      color: brown;
    }
  }
`