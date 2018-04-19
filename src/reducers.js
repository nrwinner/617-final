import type { Action } from './actions'
import { BYTE_CHANGE_SECTION, INIT_CONSUMABLE_BYTE } from './actions'

const initialState = {
    consumingByte: {}
}

export function appReducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case BYTE_CHANGE_SECTION:
            state.consumingByte.activeSection = action.name;
            return assign(state);

        case INIT_CONSUMABLE_BYTE:
            state.consumingByte = smash([action.data, { activeSection: action.data.sections[0].name }]);
            console.log(state);
            return assign(state);

        default:
            return state;
    }
}

function smash(states: []) {
    return Object.assign({}, ...states);
}

function assign(state) {
    return Object.assign({}, state);
}