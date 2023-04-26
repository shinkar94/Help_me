import {combineReducers, createStore} from "redux";
import {StartPageReducer} from "../reducer/StartPageReducer";
import {SideBarReducer} from "../reducer/SideBarReducer";


const RootReducer=combineReducers({
    startPage: StartPageReducer,
    sideBar: SideBarReducer
})

export const store=createStore(RootReducer)
export type RootState=ReturnType<typeof RootReducer>


// @ts-ignore
window.store=store