import {v1} from "uuid";

export type StateType ={
    StateMenu: ListArrayType
    pageText: PageTextType
}
export type ListArrayType = {
    ReactInf: InfObjectType[]
    JSInf: InfObjectType[]
    CSSInf: InfObjectType[]

}
export type InfObjectType = {
    id: string
    name: string
    img: string
    linkImg: string
    homeLink: boolean
    netWorkLink: string
}

export type PageTextType = {
    library: LibraryType
}
export type LibraryType = {
    title: string,
    infBlock: InfoBlockType[]
}
export type InfoBlockType = {
    title: string,
    textLibrary: string[]
    titleStatus: boolean
    idInfText: string
}


const viteImg = 'https://lh3.googleusercontent.com/rwwrjO2a2ChT4bQA2XwzlDotYIE8V3h3NLzV-mpb2_0hGE0FlPooFg5HiRdroUGV-A7p8aCxqOumcVtQsol3Pj5nQBREZUsbS7SahKFPl5oEM5a3AqL3PSZ6pCUakBk6eB2kt-ahIg=w2400';
const reactImg = 'https://lh3.googleusercontent.com/Hc84DoCcmZPSZwzgGJ3dj8hNi_dojpd6aWJEG7zAC4Lt1tbX3TrgQ9hYKNhBHutJo5BeSDn_8Zx-Dxlus0uEGQmt8jeoxFTYx2dcMBCE_wLD4fNz1iht-BgMZlprvzPv-cZkw6VGcg=s64-p-k';
const GPhotos = 'https://lh3.googleusercontent.com/ych9-YyALqgpJm4M2opTltvpNBfGunn5syN84IKYzU7IOqy2VpavRRdlzzDJWsvhKQ2eK9l3Dg6MuWTlETrOtef2HXfMgdkyvbfL_2V4eGHPEy9cmvn1sWwK0VYV4ZgiqofFxZB0hA=s96-p-k';
const StoryBook = 'https://lh3.googleusercontent.com/AKt3M2M59tO0giMA7qGCmlQ8ha8p2yktc2n8eAZSq1EQoKvFAAieI3LJGneXmnVnIGhHrgv4eQP6y2CFx6GqXhaq7zVZQElBXbgGejBYG8ZYKaQgAfVUVQ0AiUNOeZAzN-yhvyYFlA=s96-p-k';
const IconStyle = 'https://lh3.googleusercontent.com/uTB8ja8I1EeYp9wnlOQ-m8HeabA6qum59Mo2K7fG0DCGcvZ8_BiCnX7dvcYzJMqOB06ALmCwBKyUrHBe6M8tm2rpmA0esbOt1B4I-09q_U-qp85Jl2MjuqN3ZpDdhAa5AZd_-SaHLA=s114-p-k';
const MaterialUI = 'https://lh3.googleusercontent.com/pw/AMWts8DSGj0ZxBg9CcRyPROy-QFihg013_78MCl9im_xbU1PLhVHU3PPIVb8qnkb9mZJq4Yu2mYmEBZk8jpiuikDnSPZwh0S53bXc6HT9vthi6BnREYBREc=w2400'
const Babel = 'https://lh3.googleusercontent.com/pw/AMWts8DiUJE2Z6_PobA6DDA2n5WFNIv6YvkSpacRXlxGaw8lDzab-zxy_hOyLOjMVBmZBOdedELNMiu_on_qgWfi3p1PuBxJibURtZvGY01aUVkVeA_WknE=s100-p-k'
export const state:StateType = {
    StateMenu:{
        ReactInf: [
            {id: v1(), linkImg: `${reactImg}`, name:"React-typeScript", img: "CRM", homeLink: false, netWorkLink: "https://create-react-app.dev/docs/adding-typescript/"},
            {id: v1(), linkImg: `${viteImg}`, name:"vite", img: "vito", homeLink: false, netWorkLink: "https://vitejs.dev/"},
            {id: v1(), linkImg: `${StoryBook}`, name:"StoryBook", img: "StoryBook", homeLink: false, netWorkLink: "https://storybook.js.org/"},
            {id: v1(), linkImg: `${MaterialUI}`, name:"MaterialUI", img: "MaterialUI", homeLink: false, netWorkLink: "https://mui.com/"},
            {id: v1(), linkImg: `${reactImg}`, name:"Roman", img: "CRM", homeLink: true, netWorkLink: ""}
        ],
        JSInf: [
            {id: v1(), linkImg: `${Babel}`, name:"Babel", img: "Babel", homeLink: false, netWorkLink: "https://babeljs.io/"},
            {id: v1(), linkImg: `${reactImg}`, name:"Katy", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"Tany", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"Olga", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"Roman", img: "CRM", homeLink: true, netWorkLink: ""}
        ],
        CSSInf: [
            {id: v1(), linkImg: `${reactImg}`, name:"Roman", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"Katy", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"Tany", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${IconStyle}`, name:"FlatIcon", img: "FlatIcon", homeLink: false, netWorkLink: "https://www.flaticon.com/"},
            {id: v1(), linkImg: `${GPhotos}`, name:"Embed GPhotos", img: "CRM", homeLink: false, netWorkLink: "https://www.labnol.org/embed/google/photos/"}
        ],
    },
    pageText: {
        library: {
            title: "ГОРЯЧИЕ БИБЛИОТЕКИ",
            infBlock: [
                {idInfText: v1(), title: "UUID", textLibrary: ["yarn add uuid","yarn add @types/uuid"], titleStatus: false},
                {idInfText: v1(), title: "CRA", textLibrary: ["yarn create react-app newapp --template typescript"], titleStatus: false},
                {idInfText: v1(), title: "Обновить все библиотеки", textLibrary: ["yarn add react@latest"], titleStatus: false},
                {idInfText: v1(), title: "RouterDom", textLibrary: ["yarn add react-router-dom","yarn add @types/react-router-dom"], titleStatus: false},
                {idInfText: v1(), title: "Redux", textLibrary: ["yarn add redux react-redux @types/react-redux"], titleStatus: false},
                {idInfText: v1(), title: "AXIOS", textLibrary: ["yarn add axios"], titleStatus: false},
                {idInfText: v1(), title: "Redux-Thunk", textLibrary: ["yarn add redux-thunk"], titleStatus: false},
                {idInfText: v1(), title: "Redux-Tolkit", textLibrary: ["yarn add @reduxjs/toolkit"], titleStatus: false},
                {idInfText: v1(), title: "Material UI", textLibrary: ["yarn add @mui/material @emotion/react @emotion/styled","yarn add @mui/icons-material"], titleStatus: false},
                {idInfText: v1(), title: "Обновление TS если Material UI не пошел", textLibrary: ["yarn add typescript"], titleStatus: false},
                {idInfText: v1(), title: "Styled-components", textLibrary: ["yarn add styled-components","yarn add @types/styled-components"], titleStatus: false},
                {idInfText: v1(), title: "Storybook", textLibrary: ["npx -p @storybook/cli sb init"], titleStatus: false},
            ]
        }
    }
}