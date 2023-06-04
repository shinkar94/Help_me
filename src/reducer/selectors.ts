import {RootState} from "../store/store";

export const startPageSelector = (state: RootState) => state.startPage
export const stateMenuSelector = (state: RootState)=> state.sideBar.StateMenu