
export type PageReducerType = {
    opacity: number
}



export const StartPageReducer = (state:PageReducerType, action:GlobalType): PageReducerType =>{
    switch (action.type){
        case "OPACITY-TICK":
            let stateCopy = {...state, opacity: action.payload.opacity}
            setTimeout(()=>{
                stateCopy = {...state, opacity: 0}
            },2000)
            return  stateCopy
        default:
            throw new Error("ERROR! Type not Found!!")
    }
    return state
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