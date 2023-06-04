import {v1} from "uuid";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    bgColor: string
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
                {idInfText: v1(),opacityTick: 0,bgColor: "#096418", title: "CRA+RTK+RouterDom+AXIOS+Styled-components+UUID", textLibrary: ["yarn create react-app newapp --template redux-typescript && yarn add uuid @types/uuid react-router-dom @types/react-router-dom axios styled-components @types/styled-components"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "CRA", textLibrary: ["yarn create react-app newapp --template typescript"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "CRA+RTK", textLibrary: ["yarn create react-app newapp --template redux-typescript"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "RTK-VITE", textLibrary: ["npx degit reduxjs/redux-templates/packages/vite-template-redux my-app"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "UUID", textLibrary: ["yarn add uuid","yarn add @types/uuid"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "RouterDom", textLibrary: ["yarn add react-router-dom","yarn add @types/react-router-dom"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "Redux", textLibrary: ["yarn add redux react-redux @types/react-redux"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "AXIOS", textLibrary: ["yarn add axios"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "Redux-Thunk", textLibrary: ["yarn add redux-thunk"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "Redux-Tolkit", textLibrary: ["yarn add @reduxjs/toolkit"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#985252FF", title: "Styled-components", textLibrary: ["yarn add styled-components","yarn add @types/styled-components"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "rgba(249,208,87,0.55)", title: "Auto-Animate", textLibrary: ["yarn add @formkit/auto-animate"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "rgba(249,208,87,0.55)", title: "YUP", textLibrary: ["yarn add yup"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#0F5096", title: "Material UI", textLibrary: ["yarn add @mui/material @emotion/react @emotion/styled","yarn add @mui/icons-material"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#0F5096", title: "Обновление TS если Material UI не пошел", textLibrary: ["yarn add typescript"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "#0F5096", title: "Storybook", textLibrary: ["npx storybook@latest init"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "", title: "Chart.js", textLibrary: ["yarn install chart.js"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "", title: "Обновить все библиотеки", textLibrary: ["yarn add react@latest"], titleStatus: false},
                {idInfText: v1(),opacityTick: 0,bgColor: "", title: "CRA ERROR", textLibrary: ["yarn add --dev @babel/plugin-proposal-private-property-in-object"], titleStatus: false},
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
//EXEMPEL*******************************
// import * as Yup from 'yup';
// const formik = useFormik({
//      initialValues: {
//        firstName: '',
//        lastName: '',
//        email: '',
//      },
//      validationSchema: Yup.object({
//        firstName: Yup.string()
//          .max(15, 'Must be 15 characters or less')
//          .required('Required'),
//        lastName: Yup.string()
//          .max(20, 'Must be 20 characters or less')
//          .required('Required'),
//        email: Yup.string().email('Invalid email address').required('Required'),
//      }),
//      onSubmit: values => {
//        alert(JSON.stringify(values, null, 2));
//      },
//    });

const slice = createSlice({
    name: 'start-page',
    initialState: initialState,
    reducers: {
        toggleTitle: (state, action:PayloadAction<{id: string}>)=>{
            state.library.InfLibrary.infBlock.map(el => el.idInfText === action.payload.id ? el.titleStatus = !el.titleStatus : el)
        },
        toggleOpacity: (state, action:PayloadAction<{id: string, opacity: number}>)=>{
            state.library.InfLibrary.infBlock.map(el=>el.idInfText === action.payload.id ? el.opacityTick = action.payload.opacity : el)
        }
    }
})

export const startPageReducer = slice.reducer
export const startPageAction = slice.actions
