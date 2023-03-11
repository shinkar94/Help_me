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
    extension: string
}

export const state:StateType = {
    StateMenu:{
        ReactInf: [
            {id: v1(), link: "CRM", name:"React-typeScript", img: "CRM", extension: 'ico'},
            {id: v1(), link: "Vite", name:"vite", img: "vito", extension: 'svg'},
            {id: v1(), link: "CRM", name:"Tany", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Olga", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Roman", img: "CRM", extension: 'ico'}
        ],
        JSInf: [
            {id: v1(), link: "CRM", name:"Roman", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Katy", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Tany", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Olga", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Roman", img: "CRM", extension: 'ico'}
        ],
        CSSInf: [
            {id: v1(), link: "CRM", name:"Roman", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Katy", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Tany", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Olga", img: "CRM", extension: 'ico'},
            {id: v1(), link: "CRM", name:"Roman", img: "CRM", extension: 'ico'}
        ],
    }
}