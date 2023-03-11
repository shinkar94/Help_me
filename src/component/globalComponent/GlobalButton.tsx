import React from "react";

type GlobalButtonType = {
    nameBtn: string
}

export const GlobalButton:React.FC<GlobalButtonType> = ({nameBtn}) =>{
    return(
        <button>{nameBtn}</button>
    )
}