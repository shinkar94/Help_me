import React, {FC} from 'react';
import {LibraryFireType} from "../../../reducer/StartPageReducer";

type FireLibraryType = {
    fireLibrarys: LibraryFireType
}

export const FireLibrary:FC<FireLibraryType> = ({fireLibrarys}) => {
    return (
        <>
            <h3>{fireLibrarys.title}</h3>
            <div>
                {fireLibrarys.fireBlock.map((el, index)=>{
                    return(
                        <p key={index}><span>{el.fireBtn}</span>{el.title}</p>
                    )
                })}
            </div>
        </>
    );
};