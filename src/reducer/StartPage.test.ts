import {StartPageReducerType, ToggleOpacityAC} from "./StartPageReducer";

test('control toggle ', ()=>{
    const state: StartPageReducerType = {
        opacity: 0
    }


    const newState =  ToggleOpacityAC(1)

    expect(state.opacity).toBe(0)
})


test('toggle Title', ()=>{

})