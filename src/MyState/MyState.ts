import {v1} from "uuid";

export type StateType ={
    StateMenu: ListArrayType
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
    link: string
}
const viteImg = 'https://lh3.googleusercontent.com/rwwrjO2a2ChT4bQA2XwzlDotYIE8V3h3NLzV-mpb2_0hGE0FlPooFg5HiRdroUGV-A7p8aCxqOumcVtQsol3Pj5nQBREZUsbS7SahKFPl5oEM5a3AqL3PSZ6pCUakBk6eB2kt-ahIg=w2400';
const reactImg = 'https://lh3.googleusercontent.com/Hc84DoCcmZPSZwzgGJ3dj8hNi_dojpd6aWJEG7zAC4Lt1tbX3TrgQ9hYKNhBHutJo5BeSDn_8Zx-Dxlus0uEGQmt8jeoxFTYx2dcMBCE_wLD4fNz1iht-BgMZlprvzPv-cZkw6VGcg=s64-p-k';
const GPhotos = 'https://lh3.googleusercontent.com/ych9-YyALqgpJm4M2opTltvpNBfGunn5syN84IKYzU7IOqy2VpavRRdlzzDJWsvhKQ2eK9l3Dg6MuWTlETrOtef2HXfMgdkyvbfL_2V4eGHPEy9cmvn1sWwK0VYV4ZgiqofFxZB0hA=s96-p-k';
export const state:StateType = {
    StateMenu:{
        ReactInf: [
            {id: v1(), link: `${reactImg}`, name:"React-typeScript", img: "CRM"},
            {id: v1(), link: `${viteImg}`, name:"vite", img: "vito"},
            {id: v1(), link: `${reactImg}`, name:"Tany", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Olga", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Roman", img: "CRM"}
        ],
        JSInf: [
            {id: v1(), link: `${reactImg}`, name:"Roman", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Katy", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Tany", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Olga", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Roman", img: "CRM"}
        ],
        CSSInf: [
            {id: v1(), link: `${reactImg}`, name:"Roman", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Katy", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Tany", img: "CRM"},
            {id: v1(), link: `${reactImg}`, name:"Olga", img: "CRM"},
            {id: v1(), link: `${GPhotos}`, name:"Embed GPhotos", img: "CRM"}
        ],
    }
}