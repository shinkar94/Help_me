import {Action, combineReducers, createStore} from "redux";
import {SideBarReducer} from "../reducer/SideBarReducer";
import {configureStore, ThunkAction} from "@reduxjs/toolkit";
import {startPageReducer} from "../reducer/StartPageReducer";


export const store = configureStore({
    reducer:{
        startPage: startPageReducer,
        sideBar: SideBarReducer
    }
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;

// @ts-ignore
window.store=store