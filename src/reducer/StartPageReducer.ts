import {v1} from "uuid";
export type PageTextType = {
    library: LibraryType
    opacity: number
}
export type LibraryType = {
    InfLibrary : LibraryInfoType
    FireLibrary : LibraryFireType
}
export type LibraryInfoType = {
    title: string
    infBlock: InfoBlockType[]
}
export type LibraryFireType = {
    title:string
    fireBlock: FireBlockType[]
}
export type InfoBlockType = {
    title: string,
    textLibrary: string[]
    titleStatus: boolean
    idInfText: string
    opacityTick: number
}
export type FireBlockType = {
    title: string
    fireBtn: string
}

const initialState: PageTextType = {
    library: {
        InfLibrary : {
            title: "ГОРЯЧИЕ БИБЛИОТЕКИ",
            infBlock: [
                {idInfText: v1(),opacityTick: 0, title: "UUID", textLibrary: ["yarn add uuid","yarn add @types/uuid"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "CRA", textLibrary: ["yarn create react-app newapp --template typescript"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Обновить все библиотеки", textLibrary: ["yarn add react@latest"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "RouterDom", textLibrary: ["yarn add react-router-dom","yarn add @types/react-router-dom"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Redux", textLibrary: ["yarn add redux react-redux @types/react-redux"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "AXIOS", textLibrary: ["yarn add axios"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Redux-Thunk", textLibrary: ["yarn add redux-thunk"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Redux-Tolkit", textLibrary: ["yarn add @reduxjs/toolkit"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Material UI", textLibrary: ["yarn add @mui/material @emotion/react @emotion/styled","yarn add @mui/icons-material"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Обновление TS если Material UI не пошел", textLibrary: ["yarn add typescript"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Styled-components", textLibrary: ["yarn add styled-components","yarn add @types/styled-components"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Storybook", textLibrary: ["npx storybook@latest init"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0, title: "Chart.js", textLibrary: ["yarn install chart.js"], titleStatus: false},
            ]
        },
        FireLibrary : {
            title: "ГОРЯЧИЕ КЛАВИШИ",
            fireBlock: [
                {fireBtn: "shift+f6", title: "-переименовать везде"},
                {fireBtn: "Ctrl+shift+v", title: "–достать из буфера"},
                {fireBtn: "Ctrl+shift+n", title: "–глобальный поиск"},
                {fireBtn: "Ctrl+space", title: "–подсказать путь в импорте"},
                {fireBtn: "Ctrl+P", title: "–подсказать аргументы в импорте"},
                {fireBtn: "alt+F1-Enter", title: "-показать в дереве файл, в котором находишься"},
                {fireBtn: "alt+Enter", title: "-заменить/ обернуть в кавычки, в бэктики"},
                {fireBtn: "alt+Ctrl+Z", title: "откатить назад изменения в проекте в окне коммитов"},
            ]
        }
    },
    opacity: 0
}



type ActionType = ToggleTitleACType | ToggleOpacityACType


export const StartPageReducer = (state:PageTextType = initialState, action:ActionType):PageTextType=>{
    switch (action.type){
        case "CLICK-TITLE":
            return{
                ...state,
                library: {
                    ...state.library,
                    InfLibrary: {
                        ...state.library.InfLibrary,
                        infBlock: state.library.InfLibrary.infBlock.map((el) => el.idInfText === action.payload.id ? {...el, titleStatus: !el.titleStatus} : el)
                    }
                }
            }
        case 'OPACITY-TICK':
            return {
                ...state,
                library: {
                    ...state.library,
                    InfLibrary: {
                        ...state.library.InfLibrary,
                        infBlock: state.library.InfLibrary.infBlock.map(el => el.idInfText === action.payload.id ? {...el, opacityTick: action.payload.opacity} : el)
                    }
                }

            }
        default:
            return state
    }
}
type ToggleOpacityACType = ReturnType<typeof ToggleOpacityAC>
export const ToggleOpacityAC=(id:string, opacity: number)=>{
    return{
        type:'OPACITY-TICK',
        payload:{
            id,
            opacity
        }
    }as const
}
type ToggleTitleACType = ReturnType<typeof ToggleTitleAC>
export const ToggleTitleAC = (id: string)=>{
    return{
        type: 'CLICK-TITLE',
        payload:{
            id
        }
    } as const
}
