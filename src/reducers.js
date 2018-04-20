import { Action } from './actions'
import { BYTE_CHANGE_SECTION, INIT_CONSUMABLE_BYTE, SELECT_QUESTION_OPTION } from './actions'

import type { ByteType, SectionType, UserType } from '@/types';

const initialState = {
}

export function appReducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case BYTE_CHANGE_SECTION:
            state.consumingByte.activeSection = action.id;
            return assign(state);

        case INIT_CONSUMABLE_BYTE:
            state.consumingByte = smash(Array(buildByte(action.data), { activeSection: action.data.sections[0].id }));
            return assign(state);

        case SELECT_QUESTION_OPTION:
            console.log(action);
            state.consumingByte.sections.get(action.section).questions.get(action.question).activeOption = action.option;
            console.log(state);
            return assign(state);

        default:
            return state;
    }
}

function smash(states: Array<any>) {
    return Object.assign({}, ...states);
}

function assign(state) {
    return Object.assign({}, state);
}

function buildByte(object: any): ByteType {
    let b: ByteType;

    let sections: Map<string, SectionType> = new Map(object.sections.map(s => {
        let b = Object.assign({}, s);
        b.questions = new Map(s.questions.map((v, i) => {
            let c = Object.assign({}, v, { id: i.toString() });
            c.options = new Map(v.options.map(o => {
                return [o.id, o.text]
            }));
            return [i.toString(), c];
        }));
        return [s.id, b];
    }));

    b = {
        id: object.id,
        name: object.name,
        description: object.description,
        date: object.date, 
        creator: (object.creator: UserType),
        materials: object.materials,
        sections: sections
    };

    return b;
}