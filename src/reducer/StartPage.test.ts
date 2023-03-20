import {PageReducerType, ToggleOpacityAC} from "./StartPageReducer";

test('control toggle ', ()=>{
    const state: PageReducerType = {
        opacity: 0
    }

    ToggleOpacityAC(1)

    expect(state.opacity).toBe(1)
})