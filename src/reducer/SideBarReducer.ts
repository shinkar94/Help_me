import {v1} from "uuid";
import jsIcon from '../img/icon/jsIcon.png'

export type StateType ={
    StateMenu: ListArrayType
}
export type ListArrayType = {
    ReactInf: InfObjectType[]
    JSInf: InfObjectType[]
    CSSInf: InfObjectType[]
    Auxiliary: InfObjectType[]

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
const Carbon = 'https://carbon.now.sh/static/brand/icon.png'
const BoxShadow = 'https://box-shadow.dev/favicon.svg'
const EvLoop = jsIcon
const ChartJs = 'https://www.chartjs.org/docs/latest/favicon.ico'
export const initialState:StateType = {
    StateMenu:{
        ReactInf: [
            {id: v1(), linkImg: `${reactImg}`, name:"React-typeScript", img: "CRM", homeLink: false, netWorkLink: "https://create-react-app.dev/docs/adding-typescript/"},
            {id: v1(), linkImg: `${viteImg}`, name:"vite", img: "vito", homeLink: false, netWorkLink: "https://vitejs.dev/"},
            {id: v1(), linkImg: `${StoryBook}`, name:"StoryBook", img: "StoryBook", homeLink: false, netWorkLink: "https://storybook.js.org/"},
            {id: v1(), linkImg: `${MaterialUI}`, name:"MaterialUI", img: "MaterialUI", homeLink: false, netWorkLink: "https://mui.com/"},
            {id: v1(), linkImg: `${ChartJs}`, name:"Chart.JS", img: "Chart", homeLink: false, netWorkLink: "https://www.chartjs.org/docs/latest/samples/area/line-boundaries.html"}
        ],
        JSInf: [
            {id: v1(), linkImg: `${Babel}`, name:"Babel", img: "Babel", homeLink: false, netWorkLink: "https://babeljs.io/"},
            {id: v1(), linkImg: `${EvLoop}`, name:"Event loop online", img: "EVLOOP", homeLink: false, netWorkLink: "http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"},
            {id: v1(), linkImg: `${reactImg}`, name:"JS", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"JS", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"JS", img: "CRM", homeLink: true, netWorkLink: ""}
        ],
        CSSInf: [
            {id: v1(), linkImg: `${reactImg}`, name:"CSS", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${reactImg}`, name:"CSS", img: "CRM", homeLink: true, netWorkLink: ""},
            {id: v1(), linkImg: `${BoxShadow}`, name:"Box-shadow-dev", img: "box-shadow", homeLink: false, netWorkLink: "https://box-shadow.dev/"},
            {id: v1(), linkImg: `${IconStyle}`, name:"FlatIcon", img: "FlatIcon", homeLink: false, netWorkLink: "https://www.flaticon.com/"},
            {id: v1(), linkImg: `${GPhotos}`, name:"Embed GPhotos", img: "CRM", homeLink: false, netWorkLink: "https://www.labnol.org/embed/google/photos/"}
        ],
        Auxiliary:[
            {id: v1(), linkImg: `${Carbon}`, name:"Carbon", img: "Carbon", homeLink: false, netWorkLink: "https://carbon.now.sh/"},
        ]
    }
}

export const SideBarReducer = (state:StateType = initialState, action: any):StateType =>{
    switch (action.type) {
        case 'XXX':{
            return state
        }
        default: return state
    }
}