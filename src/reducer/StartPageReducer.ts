import {v1} from "uuid";
import {InfoBlockType, PageTextType} from "../component/Page/StartPage";



export type StartPageReducerType = {
    opacity: number

}


export const StartPageReducer = (state:StartPageReducerType, action:GlobalType): StartPageReducerType=>{
    switch (action.type){
        case "OPACITY-TICK":
            let stateCopy = {...state, opacity: action.payload.opacity}
            return  stateCopy
        default:
            return state
    }

}
type GlobalType = ToggleOpacityACType

type ToggleOpacityACType = ReturnType<typeof ToggleOpacityAC>
export const ToggleOpacityAC=(opacity: number)=>{
    return{
        type:'OPACITY-TICK',
        payload:{
            opacity
        }
    }as const
}
// type ToggleTitleACType = ReturnType<typeof ToggleTitleAC>
// export const ToggleTitleAC = (pageText: PageTextType)=>{
//     return{
//         type: 'CLICK-TITLE',
//         payload:{
//             pageText
//         }
//     }
// }
